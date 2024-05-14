import { createClient } from '@supabase/supabase-js'
import dontenv from 'dotenv'
dotenv.config()


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mqazwgooiooaafjhlaje.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

import { supabase } from './Config/supabase.config.js';

app.get('/test', (req, res) => {
    res.send('Dette er en test route!');
});

let { data, error } = await supabase.from('songs').select('id, title')
if (error) {
    throw new Error(error.message);
} else {
    return data
}

// app.get('/test', async (req, res) => {
//     try {
//         let { data, error } = await supabase.from('songs').select('id, title');
//         if (error) {
//             throw new Error(error.message);
//         } else {
//             res.json(data);
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });