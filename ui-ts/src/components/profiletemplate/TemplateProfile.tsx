import React from 'react';
import './TemplateProfile.css'; // Asegúrate de tener un archivo CSS para tus estilos
import TopNavbar from '../topnavbar/TopNavbar';
import BottomNavbar from '../bottomnavbar/BottomNavBar';

interface ProfileProps {
    photo: string;
    name: string;
    bio: string;
    teamPhoto: string;
    teamName: string;
    teamMatches: number;
}

const TemplateProfile: React.FC<ProfileProps> = ({
    photo,
    name,
    bio,
    teamPhoto,
    teamName,
    teamMatches,
}) => {
    return (
        <div className="">
            <TopNavbar props='Your Profile' />
            <div className='profile-container'>
                <div className="user-profile profile-box">
                    <img className='user-photo box1' src={photo} alt="User" />
                    <div className="user-info box1">{name}</div>
                </div>
                <div className='profile-box box2'>{bio}</div>
                <div className="team-profile profile-box">
                    <img className='team-photo box3' src={teamPhoto} alt="Team" />
                    <div className="team-info  box3">{teamName}</div>
                </div>
                <div className='profile-box box4'>Matches played: {teamMatches}</div>
            </div>
            <BottomNavbar />
        </div>
    );
};

export default TemplateProfile;
