// INFO: Этот метод будет удален после внесения всех изменений в пакет
// INFO: Предназначен для внутреннего использования
export const hasComponentDraftConfig = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { IS_DRAFT = false } = import.meta.env;

    return IS_DRAFT;
};
