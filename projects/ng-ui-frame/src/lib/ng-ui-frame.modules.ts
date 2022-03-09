/**
 *  @interface NavItem
 *
 *  @appName             {string}     displayed app name, shows only in opened mode
 *  @appNameShort        {string}     displayed short app name, only 6 chars allowed!
 *  @logo                {string}     link to logo, can be relative or full URL
 */
export interface FrameConfig {
    appName: string
    appNameShort?: StringOfLength<0, 6>
    logo: string
}

export const FrameEvents = {
    SETTINGS: 'EVENT_SETTINGS',
    LOGOUT: 'EVENT_LOGOUT'
}

/**
 *  @interface FrameEvent
 *
 *  @type                {string}     eventtype which got fired
 *  @data                {string}     data which get send with event
 */
export interface FrameEvent {
    type: string;
    data: any;
}

/**
 *  @interface NavItem
 *
 *  @name         {string}     displayed text, shows only in opened mode
 *  @icon         {string}     displayed icon, use **only** material-icons!
 *  @link         {string}     router link
 */
export interface NavItem {
    name: string
    icon: string
    link: string
}

/**
 *  @interface NavUser
 *
 *  @name                 {string}     displayed name of user
 *  @role                 {string}     displayed role of user (can be empty)
 *  @profilePicture       {string}     profile Picture (can be empty)
 */
export interface NavUser {
    name: string
    role: string
    profilePicture: string
}


type StringOfLength<Min, Max> = string & {
    readonly StringOfLength: unique symbol // this is the phantom type
};

// This is a type guard function which can be used to assert that a string
// is of type StringOfLength<Min,Max>
const isStringOfLength = <Min extends number, Max extends number>(
    str: string,
    min: Min,
    max: Max
): str is StringOfLength<Min, Max> => str.length >= min && str.length <= max;

// type constructor function
export const stringOfLength = <Min extends number, Max extends number>(
    input: unknown,
    min: Min,
    max: Max
): StringOfLength<Min, Max> => {
    if (typeof input !== "string") {
        throw new Error("invalid input");
    }

    if (!isStringOfLength(input, min, max)) {
        throw new Error("input is not between specified min and max");
    }

    return input; // the type of input here is now StringOfLength<Min,Max>
};