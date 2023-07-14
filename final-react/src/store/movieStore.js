import create from 'zustand'

const useMovieStore = create((set) => ({
    movieData: null,
    setMovieData: (data) => set(()=>({movieData:data}))
}))

export default useMovieStore