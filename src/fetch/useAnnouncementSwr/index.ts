import useSWRImmutable from 'swr/immutable'
import { getAnnouncementFetcher } from './getAnnouncementFetcher'
export const useAnnouncementSwr = () => {
    const {data, error} = useSWRImmutable(`https://bzo3et1tzb.execute-api.ap-northeast-1.amazonaws.com/default/mirucoma-notion`, getAnnouncementFetcher,{
        onErrorRetry: (_error, _key, _config, revalidate, { retryCount }) => {
          if (retryCount >= 5) return
          setTimeout(() => revalidate({ retryCount }), 5000)
        }})
    return {
        data,
        error
    }
}