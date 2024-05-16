import { supabase } from '../config/config.supabase.js'

export class SongModel {
    static async getAllRecords(){
        try {
            const {data, error} = await supabase
            .from('Songs')
            .select('title')

            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        } 
        catch (error) {
            console.error(error)
        }
      
    }
}