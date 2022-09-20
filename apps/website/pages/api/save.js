import { Klotty } from 'klotty';
import { createClient } from '@supabase/supabase-js';

const klotty = new Klotty(process.env.KLOTTY_API_KEY)
const supabaseUrl = 'https://ahszndesjmltbfzmckge.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    const { error } = await supabase
      .from('react_email_contacts')
      .insert([
        { email_address: data.email_address },
      ]);

    if (error) throw error

    await klotty.sendEmail({
      from: 'Zeno Rocha <zeno@react.email>',
      to: data.email_address,
      subject: `Coming soon: react.email`,
      html: `Thanks for subscribing! I'll send you a note when we have something new to share.<br /><br />Cheers,<br />Zeno Rocha`,
    });

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
