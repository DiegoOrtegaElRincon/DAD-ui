import React from 'react';
import userPhoto from '../../public/images/Cloud9_logo.webp';
import teamPhoto from '../../public/images/FunPlus_Phoenix_logo.webp';
import TemplateProfile from '../../components/profiletemplate/TemplateProfile';

const Profile: React.FC = () => {
    return (
        <div>
            <TemplateProfile
                photo={userPhoto}
                name="John Doe"
                bio="Passionate gamer and esports enthusiast."
                teamPhoto={teamPhoto}
                teamName="Team XYZ"
                teamMatches={42}
            />
        </div>
    );
};

export default Profile;
