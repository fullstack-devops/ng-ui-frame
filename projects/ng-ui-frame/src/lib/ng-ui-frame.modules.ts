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