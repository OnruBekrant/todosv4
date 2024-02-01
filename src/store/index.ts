import theme from "@/utils/theme"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"
interface IGlobalStore {
    categories: ICategory[]
    tasks: []
}
const useGlobalStore = create<IGlobalStore>()(persist((set, get) => ({
    categories: [],
    tasks: [],
}),{
    name: "todo's-store",
    storage: createJSONStorage(()=>AsyncStorage),
}))
export default useGlobalStore