const SMALL_SCREEN_BREAKPOINT = 992

export const isSmallScreen: () => boolean = () => {
    return window.innerWidth < SMALL_SCREEN_BREAKPOINT
}
