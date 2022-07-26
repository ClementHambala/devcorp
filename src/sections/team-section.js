/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Clement Hambala',
    title: 'Clement Hambala',
    designation: 'Web Eng & Founder',
    background: 'BSc in Information Technology',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/clemey.hamz',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/ClementHambala',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/clement-hambala-277277160/',
        icon: <FaLinkedin />,
      },
    ],
  },
  
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Emmanuel Phiri',
    title: 'Emmanuel Phiri',
    designation: 'Business Analyst & Founder',
    background: 'BSc in Business Computing',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/emmanuel.phiri.568',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'linkedin',
         name: 'linkedin',
        path: 'https://www.linkedin.com/in/emmanuel-phiri-13420315b',
        icon: <FaLinkedin />,
      },
    ],
  }
  
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="Very qualified and skilled individuals."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              background={item.background}
              social={item.socialProfile}

            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
