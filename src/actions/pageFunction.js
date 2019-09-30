export const CHANGEPAGE = 'changepage';

export function changePage(index) {
    return {
        type: CHANGEPAGE,
        payload: index
    };
}