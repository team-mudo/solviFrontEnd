
export const CHANGEPAGE = 'changepage';
export const CHANGETEAMPAGE = 'changeteampage';

export function changePage(index) {
    return {
        type: CHANGEPAGE,
        payload: index
    };
}

export function changeTeamPage(index) {
    return {
        type: CHANGETEAMPAGE,
        payload: index
    };
}
