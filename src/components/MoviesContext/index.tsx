import { MoviesService } from '../../services/MoviesService'
import React, { createContext, useCallback, ReactNode, useContext, useState } from 'react'

type MoviesContextType = { loading: boolean, results: object[], setResponse: (loading: boolean, results: object[]) => void }
const MoviesContext = createContext<MoviesContextType>({} as MoviesContextType)

export function MoviesProvider({ children }: { children: ReactNode }) {
  const [response, setResponse] = useState<Pick<MoviesContextType, 'loading' | 'results'>>({ loading: true, results: [] })

  return <MoviesContext.Provider value={{
    setResponse: (loading: boolean, results: object[]) => {
      setResponse({ loading, results })
    },
    loading: response.loading,
    results: response.results,
  }}>
    {children}
  </MoviesContext.Provider>
}

export function useMovies() {
  return useContext(MoviesContext)
}