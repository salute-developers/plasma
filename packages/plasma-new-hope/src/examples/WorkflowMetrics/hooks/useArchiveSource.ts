import { useEffect, useMemo, useRef, useState } from 'react';

import { createMetricsClient } from '../api/client';
import type { ArchiveManifest } from '../archive/types';
import { archiveDirectories } from '../model/constants';
import type { Workflow } from '../model/types';
import { firstFilterDate } from '../utils/dates';

/** Owns the selected manifest, its initial filters and the explicitly requested full export. */
export function useArchiveSource(dataBaseUrl: string) {
    const client = useMemo(() => createMetricsClient(dataBaseUrl), [dataBaseUrl]);

    const [workflow, setWorkflow] = useState<Workflow>('cypress-by-cron-every-day.yml');
    const [archive, setArchive] = useState<{ key: string; manifest: ArchiveManifest } | null>(null);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const [revision, setRevision] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
    const [downloading, setDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState('');

    const downloadController = useRef<AbortController | null>(null);

    const archiveKey = `${dataBaseUrl}/${workflow}/${revision}`;

    const history = archive?.key === archiveKey ? archive.manifest : null;

    useEffect(() => {
        const controller = new AbortController();
        setBusy(true);
        setError('');
        setDownloading(false);
        setDownloadError('');
        const load = async () => {
            try {
                const data = await client.loadManifest(workflow, controller.signal);
                if (controller.signal.aborted) return;
                setArchive({ key: archiveKey, manifest: data });
                setFrom(firstFilterDate(data.from));
                setTo(data.to);
                setSelectedPackages(data.packages);
            } catch (reason) {
                if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : String(reason));
            } finally {
                if (!controller.signal.aborted) setBusy(false);
            }
        };
        void load();
        return () => {
            controller.abort();
            downloadController.current?.abort();
        };
    }, [client, workflow, archiveKey]);

    const downloadHistory = async () => {
        if (!history || downloading) return;
        const controller = new AbortController();
        downloadController.current = controller;
        setDownloading(true);
        setDownloadError('');
        try {
            const data = await client.loadHistory(history, controller.signal);
            if (controller.signal.aborted) return;
            const url = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
            const link = document.createElement('a');
            link.href = url;
            link.download = `${archiveDirectories[history.workflow]}.json`;
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        } catch (reason) {
            if (!controller.signal.aborted) setDownloadError(reason instanceof Error ? reason.message : String(reason));
        } finally {
            if (downloadController.current === controller) {
                downloadController.current = null;
                setDownloading(false);
            }
        }
    };
    return {
        client,
        workflow,
        setWorkflow,
        history,
        archiveKey,
        busy,
        error,
        from,
        setFrom,
        to,
        setTo,
        selectedPackages,
        setSelectedPackages,
        downloading,
        downloadError,
        downloadHistory,
        retryArchive: () => setRevision((value) => value + 1),
    };
}
