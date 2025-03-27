import React from 'react';
import { Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SplitText from '../components/SplitText';
import TiltedCard from '../components/TiltedCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      image: '/cover1.png',
      title: 'Kendrick Lamar - GNX',
      description: 'Album Cover Design',
      path: '/project/1'
    },
    {
      image: '/cover2.png',
      title: 'Project 2',
      description: 'Description for Project 2'
    },
    {
      image: '/cover3.png',
      title: 'Project 3',
      description: 'Description for Project 3'
    },
    // 可以添加更多项目
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* 第一屏：个人介绍 */}
      <Container maxWidth="lg" sx={{ 
        height: '50vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{ 
          width: '100%',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
          <Box
            component="img"
            src="/avater.png"
            alt="avatar"
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2,
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 2,
            }}>
              <span style={{ 
                fontSize: '5rem', 
                fontWeight: 700, 
                lineHeight: 1.2, 
                color: '#000',
                textAlign: 'center',
              }}>嗨，</span>
              <SplitText
                text="我是范米花儿"
                textAlign="center"
                style={{
                  fontSize: '5rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#000',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* 第二屏：作品画廊 */}
      <Box sx={{ 
        py: 8,
        position: 'relative',
        zIndex: 0,
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {projects.map((project, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  cursor: project.path ? 'pointer' : 'default'
                }}
                onClick={() => project.path && navigate(project.path)}
              >
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText="点击查看详情"
                  containerHeight="225px"
                  containerWidth="400px"
                  imageHeight="225px"
                  imageWidth="400px"
                  rotateAmplitude={14}
                  scaleOnHover={1.1}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 