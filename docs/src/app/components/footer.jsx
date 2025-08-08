import '../globals.css';
import { Typography, Container } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


export default function Footer() {
    return (
        <footer className="relative bg-gray-400 py-10">
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} 品誠書店. 版權所有.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    <Link href="/aboutus" color="inherit" className='hover:text-white'>
                        關於我們
                    </Link>
                    {' | '}
                    <Link href="/contactus" color="inherit" className='hover:text-white'>
                        聯繫我們
                    </Link>
                    {' | '}
                    <Link href="/policy" color="inherit" className='hover:text-white'>
                        隱私政策
                    </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" className='hover:scale-110 delay-100 ease-in-out'>
                <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-blue-800 '>
                        <FacebookIcon />
                </Link>
                <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-pink-600 '>
                        <InstagramIcon />
                </Link>
                <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-red-700 '>
                        <YouTubeIcon />
                </Link>
                <Link href="/contactus" color="inherit" className='hover:cursor-pointer m-2 text-black '>
                        <XIcon />
                </Link>
                </Typography>
            </Container>
        </footer>
    );
}