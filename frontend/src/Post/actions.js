export const VOTE_POST = 'VOTE_POST';

export function votePost ({id, vote}) {
    return {
        type: VOTE_POST,
        id,
        vote
    }
}