import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { Product } from '../../types'
import rest from '../../services/rest'

const useQueryProducts = (options: UseQueryOptions<Product[], Error> = {}) => {
    const query = useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: () => rest.get('/products/').then((res) => res.data),
        ...options
    })

    return query
}

export default useQueryProducts
