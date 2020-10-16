export const TOGGLE_MOBILE = 'TOGGLE_MOBILE';

export const TOGGLE_ACCOUNTS = 'TOGGLE_ACCOUNTS';

export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';

export const TOGGLE_PROFILE = 'TOGGLE_PROFILE';

export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';

export function toogleMenuMobile(){
    return { type: TOGGLE_MOBILE }
}

export function toggleAccounts(){
    return { type: TOGGLE_ACCOUNTS }
}
