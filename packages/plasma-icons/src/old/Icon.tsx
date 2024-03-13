import React from 'react';

import { IconProps, IconRoot, IconSize } from './IconRoot';
import { Apps } from './Icon.assets/Apps';
import { Avatar } from './Icon.assets/Avatar';
import { Calendar } from './Icon.assets/Calendar';
import { Clock } from './Icon.assets/Clock';
import { ClockFilled } from './Icon.assets/ClockFilled';
import { Cross } from './Icon.assets/Cross';
import { CrossCircle } from './Icon.assets/CrossCircle';
import { CrossSmall } from './Icon.assets/CrossSmall';
import { DisclosureDown } from './Icon.assets/DisclosureDown';
import { DisclosureLeft } from './Icon.assets/DisclosureLeft';
import { DisclosureRight } from './Icon.assets/DisclosureRight';
import { DisclosureUp } from './Icon.assets/DisclosureUp';
import { Edit } from './Icon.assets/Edit';
import { Event } from './Icon.assets/Event';
import { House } from './Icon.assets/House';
import { HouseSbol } from './Icon.assets/HouseSbol';
import { Maximize } from './Icon.assets/Maximize';
import { MoreHorizontal } from './Icon.assets/MoreHorizontal';
import { MoreVertical } from './Icon.assets/MoreVertical';
import { PercentStroke } from './Icon.assets/PercentStroke';
import { Persone } from './Icon.assets/Persone';
import { PlusCircle } from './Icon.assets/PlusCircle';
import { Settings } from './Icon.assets/Settings';
import { Trash } from './Icon.assets/Trash';
import { TrashFilled } from './Icon.assets/TrashFilled';
import { Cart } from './Icon.assets/Cart';
import { CartAlt } from './Icon.assets/CartAlt';
// Action
import { Alarm } from './Icon.assets/Alarm';
import { BankCard } from './Icon.assets/BankCard';
import { BankCardAlt1 } from './Icon.assets/BankCardAlt1';
import { Heart } from './Icon.assets/Heart';
import { HeartStroke } from './Icon.assets/HeartStroke';
import { Language } from './Icon.assets/Language';
import { Lock } from './Icon.assets/Lock';
import { Reset } from './Icon.assets/Reset';
import { Star } from './Icon.assets/Star';
import { TimerStroke } from './Icon.assets/TimerStroke';
import { Eye } from './Icon.assets/Eye';
import { Share } from './Icon.assets/Share';
import { CloudUpload } from './Icon.assets/CloudUpload';
import { Record } from './Icon.assets/Record';
import { Recording } from './Icon.assets/Recording';
import { RaisedHand } from './Icon.assets/RaisedHand';
// Alert
import { Bell } from './Icon.assets/Bell';
import { BellActive } from './Icon.assets/BellActive';
import { Help } from './Icon.assets/Help';
import { Info } from './Icon.assets/Info';
import { Warning } from './Icon.assets/Warning';
// AV
import { CamReverse } from './Icon.assets/CamReverse';
import { CameraVideo } from './Icon.assets/CameraVideo';
import { VideoOff } from './Icon.assets/VideoOff';
import { Mic } from './Icon.assets/Mic';
import { MicNone } from './Icon.assets/MicNone';
import { MicOff } from './Icon.assets/MicOff';
import { MusicMic } from './Icon.assets/MusicMic';
import { VolumeAlt1 } from './Icon.assets/VolumeAlt1';
import { VolumeAlt2 } from './Icon.assets/VolumeAlt2';
import { VolumeDown } from './Icon.assets/VolumeDown';
import { Mute } from './Icon.assets/Mute';
import { VolumeOff } from './Icon.assets/VolumeOff';
import { VolumeUp } from './Icon.assets/VolumeUp';
import { VideoClip } from './Icon.assets/VideoClip';
import { MusicAlbum } from './Icon.assets/MusicAlbum';
import { Music } from './Icon.assets/Music';
// Connection
import { Ethernet } from './Icon.assets/Ethernet';
import { Inputs } from './Icon.assets/Inputs';
import { Network } from './Icon.assets/Network';
import { PowerWire } from './Icon.assets/PowerWire';
import { Wifi } from './Icon.assets/Wifi';
import { WifiOff } from './Icon.assets/WifiOff';
import { WifiSignal0 } from './Icon.assets/WifiSignal0';
import { WifiSignal1 } from './Icon.assets/WifiSignal1';
import { WifiSignal2 } from './Icon.assets/WifiSignal2';
import { WifiSignal3 } from './Icon.assets/WifiSignal3';
import { WifiSignalLock } from './Icon.assets/WifiSignalLock';
// Hardware
import { Devices } from './Icon.assets/Devices';
import { DevicesAlt1 } from './Icon.assets/DevicesAlt1';
import { Device } from './Icon.assets/Device';
import { DeviceTv } from './Icon.assets/DeviceTv';
import { Display } from './Icon.assets/Display';
import { Gamepad } from './Icon.assets/Gamepad';
import { Gyro } from './Icon.assets/Gyro';
import { Headphones } from './Icon.assets/Headphones';
import { Keyboard } from './Icon.assets/Keyboard';
import { Mobile } from './Icon.assets/Mobile';
import { MobileAutorotate } from './Icon.assets/MobileAutorotate';
import { Phone } from './Icon.assets/Phone';
import { PhoneStroke } from './Icon.assets/PhoneStroke';
import { PhoneWiFi } from './Icon.assets/PhoneWiFi';
import { RemotesAndAccessories } from './Icon.assets/RemotesAndAccessories';
import { RemotesAndAccessoriesStroke } from './Icon.assets/RemotesAndAccessoriesStroke';
import { SberBoxTime } from './Icon.assets/SberBoxTime';
import { SberBoxTimeStroke } from './Icon.assets/SberBoxTimeStroke';
import { SberBoxTop } from './Icon.assets/SberBoxTop';
import { SberBoxTopFront } from './Icon.assets/SberBoxTopFront';
import { SberBoxTopStroke } from './Icon.assets/SberBoxTopStroke';
import { SberPortal } from './Icon.assets/SberPortal';
import { SberPortalStroke } from './Icon.assets/SberPortalStroke';
import { Tv } from './Icon.assets/Tv';
import { TvAlt1 } from './Icon.assets/TvAlt1';
import { TvChannel } from './Icon.assets/TvChannel';
import { TvChannelAlt1 } from './Icon.assets/TvChannelAlt1';
import { TvMode } from './Icon.assets/TvMode';
import { TvModeWiFi } from './Icon.assets/TvModeWiFi';
// Communication
import { AddToCall } from './Icon.assets/AddToCall';
import { Call } from './Icon.assets/Call';
import { CallCircle } from './Icon.assets/CallCircle';
import { CallEnd } from './Icon.assets/CallEnd';
import { CallEndCircle } from './Icon.assets/CallEndCircle';
import { CallBlock } from './Icon.assets/CallBlock';
import { CallDash } from './Icon.assets/CallDash';
import { Message } from './Icon.assets/Message';
import { Feedback } from './Icon.assets/Feedback';
// Files
import { Cardstack } from './Icon.assets/Cardstack';
import { Copy } from './Icon.assets/Copy';
import { Folder } from './Icon.assets/Folder';
// Map
import { Location } from './Icon.assets/Location';
import { LocationFill } from './Icon.assets/LocationFill';
import { NavigationArrow } from './Icon.assets/NavigationArrow';
// Player
import { Next } from './Icon.assets/Next';
import { Pause } from './Icon.assets/Pause';
import { Play } from './Icon.assets/Play';
import { Previous } from './Icon.assets/Previous';
import { Repeat } from './Icon.assets/Repeat';
import { Shuffle } from './Icon.assets/Shuffle';
// Other
import { Picture } from './Icon.assets/Picture';
import { PictureFilled } from './Icon.assets/PictureFilled';
import { Sleep } from './Icon.assets/Sleep';
import { Pip1 } from './Icon.assets/Pip1';
import { StoreGamepad } from './Icon.assets/StoreGamepad';
import { StoreRemote } from './Icon.assets/StoreRemote';
import { Ticket } from './Icon.assets/Ticket';
import { SberSpasibo } from './Icon.assets/SberSpasibo';
// Logo
import { Salute } from './Icon.assets/Salute';
import { SaluteCircle } from './Icon.assets/SaluteCircle';
import { SberAlt } from './Icon.assets/SberAlt';

export const iconSectionsSet = {
    navigation: {
        apps: Apps,
        disclosureDown: DisclosureDown,
        disclosureLeft: DisclosureLeft,
        disclosureRight: DisclosureRight,
        disclosureUp: DisclosureUp,
        maximize: Maximize,
    },
    universal: {
        avatar: Avatar,
        calendar: Calendar,
        clock: Clock,
        clockFilled: ClockFilled,
        cross: Cross,
        crossCircle: CrossCircle,
        crossSmall: CrossSmall,
        edit: Edit,
        event: Event,
        house: House,
        houseSbol: HouseSbol,
        moreHorizontal: MoreHorizontal,
        moreVertical: MoreVertical,
        percentStroke: PercentStroke,
        persone: Persone,
        plusCircle: PlusCircle,
        settings: Settings,
        trash: Trash,
        trashFilled: TrashFilled,
        cart: Cart,
        cartAlt: CartAlt,
    },
    action: {
        alarm: Alarm,
        bankCard: BankCard,
        bankCardAlt1: BankCardAlt1,
        heart: Heart,
        heartStroke: HeartStroke,
        language: Language,
        lock: Lock,
        reset: Reset,
        star: Star,
        timerStroke: TimerStroke,
        eye: Eye,
        share: Share,
        cloudUpload: CloudUpload,
        record: Record,
        recording: Recording,
        raisedHand: RaisedHand,
    },
    alert: {
        bell: Bell,
        bellActive: BellActive,
        help: Help,
        info: Info,
        warning: Warning,
    },
    av: {
        camReverse: CamReverse,
        cameraVideo: CameraVideo,
        videoOff: VideoOff,
        mic: Mic,
        micNone: MicNone,
        micOff: MicOff,
        musicMic: MusicMic,
        volumeAlt1: VolumeAlt1,
        volumeAlt2: VolumeAlt2,
        volumeDown: VolumeDown,
        mute: Mute,
        volumeOff: VolumeOff,
        volumeUp: VolumeUp,
        videoClip: VideoClip,
        musicAlbum: MusicAlbum,
        music: Music,
    },
    connection: {
        ethernet: Ethernet,
        inputs: Inputs,
        network: Network,
        powerWire: PowerWire,
        wifi: Wifi,
        wifiOff: WifiOff,
        wifiSignal0: WifiSignal0,
        wifiSignal1: WifiSignal1,
        wifiSignal2: WifiSignal2,
        wifiSignal3: WifiSignal3,
        wifiSignalLock: WifiSignalLock,
    },
    hardware: {
        devices: Devices,
        devicesAlt1: DevicesAlt1,
        device: Device,
        deviceTv: DeviceTv,
        display: Display,
        gamepad: Gamepad,
        gyro: Gyro,
        headphones: Headphones,
        keyboard: Keyboard,
        mobile: Mobile,
        mobileAutorotate: MobileAutorotate,
        phone: Phone,
        phoneStroke: PhoneStroke,
        phoneWiFi: PhoneWiFi,
        remotesAndAccessories: RemotesAndAccessories,
        remotesAndAccessoriesStroke: RemotesAndAccessoriesStroke,
        sberBoxTime: SberBoxTime,
        sberBoxTimeStroke: SberBoxTimeStroke,
        sberBoxTop: SberBoxTop,
        sberBoxTopFront: SberBoxTopFront,
        sberBoxTopStroke: SberBoxTopStroke,
        sberPortal: SberPortal,
        sberPortalStroke: SberPortalStroke,
        tv: Tv,
        tvAlt1: TvAlt1,
        tvChannel: TvChannel,
        tvChannelAlt1: TvChannelAlt1,
        tvMode: TvMode,
        tvModeWiFi: TvModeWiFi,
    },
    communication: {
        addToCall: AddToCall,
        call: Call,
        callCircle: CallCircle,
        callEnd: CallEnd,
        callEndCircle: CallEndCircle,
        callBlock: CallBlock,
        callDash: CallDash,
        message: Message,
        feedback: Feedback,
    },
    files: {
        cardstack: Cardstack,
        copy: Copy,
        folder: Folder,
    },
    map: {
        location: Location,
        locationFill: LocationFill,
        navigationArrow: NavigationArrow,
    },
    player: {
        next: Next,
        pause: Pause,
        play: Play,
        previous: Previous,
        repeat: Repeat,
        shuffle: Shuffle,
    },
    other: {
        picture: Picture,
        pictureFilled: PictureFilled,
        sleep: Sleep,
        pip1: Pip1,
        storeGamepad: StoreGamepad,
        storeRemote: StoreRemote,
        ticket: Ticket,
        sberSpasibo: SberSpasibo,
    },
    logo: {
        salute: Salute,
        saluteCircle: SaluteCircle,
        sberAlt: SberAlt,
    },
};

type IconSections = typeof iconSectionsSet;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributiveValues<T extends Record<string, any>> = T extends T ? keyof T : never;
type InnerValues<T extends Record<keyof T, object>, K extends keyof T> = DistributiveValues<T[K]>;

export type IconName = InnerValues<IconSections, keyof IconSections>;

export const iconSet = Object.values(iconSectionsSet).reduce((acc, cur) => ({ ...acc, ...cur }), {}) as Record<
    IconName,
    React.FC<IconProps>
>;
interface Props {
    icon: IconName;
    size?: IconSize;
    color?: string;
    className?: string;
}

/**
 * @depracted
 * Используйте иконки отдельно, иначе не работает tree shaking иконок
 */
export const Icon: React.FC<Props> = ({ icon, size, color, className }) => {
    return <IconRoot className={className} icon={iconSet[icon]} size={size || 's'} color={color} />;
};
