import React, { useState } from 'react';
import { Container, Box, Typography, Button, Chip, List, ListItem, ListItemText, CircularProgress, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      // 创建一个临时的 a 标签来触发下载
      const link = document.createElement('a');
      link.href = '/AI chat.fig';
      link.download = 'AI chat.fig';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('下载失败，请稍后重试');
    } finally {
      setIsDownloading(false);
    }
  };

  const tags = [
    'Figma',
    'AI对话组件',
    'UI设计',
    '交互设计',
    '前端源码'
  ];

  const baseComponents = [
    '图标',
    '导航栏组件：logo、新建按钮、功能入口、对话列表等',
    '页头组件：页头标题、页头搜索框等',
    '输入框组件：输入框按钮、快捷指令等',
    '文件上传组件：图片类、文件类、混排类',
    '多种输出格式组件：图片、代码、表格、图表',
    'AI气泡组件：猜你想问、DeepSeek推理过程等'
  ];

  const compoundComponents = [
    '导航栏复合组件：导航展开、折叠状态，带功能入口、仅对话类型',
    '页头复合组件：多种页头布局方式',
    '输入框复合组件：不同尺寸、状态等',
    '文件上传复合组件：仅图片、图片和文件混排、单行滚动、多行滚动等',
    '用户气泡复合组件：不同对齐方式、样式，纯文本、图片、文件格式等',
    'AI气泡复合组件：纯文本、图片、代码、表格、图表格式等等'
  ];

  const pageExamples = [
    '页面框架：不同页面布局方式等',
    '对话页'
  ];

  const newFeatures = [
    '本地变量：基础样式、组件样式等',
    '交互动画：默认、悬停、选中状态切换'
  ];

  return (
    <Box sx={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f5f5f5'
    }}>
      <Container maxWidth="xl" sx={{ flex: 1, py: 4 }}>
        <Button 
          onClick={() => navigate('/')}
          sx={{ 
            mb: 2,
            color: '#000',
            '&:hover': {
              background: 'rgba(0,0,0,0.04)'
            }
          }}
        >
          ← 返回首页
        </Button>

        <Box sx={{ 
          display: 'flex',
          gap: 4,
          height: 'calc(100vh - 120px)'
        }}>
          {/* 左侧图片区域 */}
          <Box sx={{ 
            flex: '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
            <Box
              component="img"
              src="/cover1.png"
              alt="Kendrick Lamar - GNX"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              width: '100%'
            }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleDownload}
                disabled={isDownloading}
                sx={{
                  borderColor: '#333',
                  color: '#333',
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#000',
                    bgcolor: '#000',
                    color: '#fff'
                  },
                  '&.Mui-disabled': {
                    color: '#999'
                  }
                }}
              >
                {isDownloading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  '下载Figma源文件'
                )}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => window.open('https://www.figma.com/community/file/1477583157011425173/ai-ai-kits', '_blank')}
                sx={{
                  borderColor: '#333',
                  color: '#333',
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#000',
                    bgcolor: '#000',
                    color: '#fff'
                  }
                }}
              >
                查看Figma预览
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => window.open('https://fan18660557495.github.io/AIchat/', '_blank')}
                sx={{
                  borderRadius: '8px',
                  borderColor: '#333',
                  color: '#333',
                  '&:hover': {
                    bgcolor: '#000',
                    color: '#fff',
                    borderColor: '#000'
                  }
                }}
              >
                试用demo
              </Button>
            </Box>
          </Box>

          {/* 右侧内容区域 */}
          <Box sx={{ 
            flex: '0 0 50%',
            background: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            <Box sx={{ 
              p: 4,
              overflowY: 'auto',
              height: '100%',
              '&::-webkit-scrollbar': {
                width: '8px'
              },
              '&::-webkit-scrollbar-track': {
                background: '#f5f5f5'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#ddd',
                borderRadius: '4px',
                '&:hover': {
                  background: '#ccc'
                }
              }
            }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 700,
                mb: 2,
                color: '#333'
              }}>
                AI组件库
              </Typography>
              
              <Box sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: 3
              }}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    sx={{
                      background: '#f0f0f0',
                      color: '#333',
                      '&:hover': {
                        background: '#e0e0e0'
                      }
                    }}
                  />
                ))}
              </Box>

              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  color: '#333',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  mb: 3
                }}
              >
                本组件库由 [范米花儿] 制作，版权归 [范米花儿] 所有，开源发布供各位小伙伴使用，但未经书面许可禁止二次搬运、传播以及任何商业用途，使用时务必保留所有版权声明及注释信息。
              </Typography>

              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#333',
                      height: 2
                    },
                    '& .MuiTab-root': {
                      color: '#666',
                      '&.Mui-selected': {
                        color: '#333',
                        fontWeight: 600
                      }
                    }
                  }}
                >
                  <Tab label="设计介绍" />
                  <Tab label="代码介绍" />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: '#333'
                  }}
                >
                  设计介绍
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mt: 2,
                    mb: 1,
                    fontWeight: 600,
                    color: '#333'
                  }}
                >
                  本文件包含3大模块：
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#333',
                      mb: 1,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    1. 基础组件
                  </Typography>
                  <List sx={{ 
                    p: 1
                  }}>
                    {baseComponents.map((item, index) => (
                      <ListItem key={index} sx={{ 
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <Box sx={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          bgcolor: '#666',
                          mt: 1.5,
                          mr: 2
                        }} />
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: '#333',
                              fontSize: '0.95rem',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#333',
                      mb: 1,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    2. 复合组件
                  </Typography>
                  <List sx={{ 
                    p: 1
                  }}>
                    {compoundComponents.map((item, index) => (
                      <ListItem key={index} sx={{ 
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <Box sx={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          bgcolor: '#666',
                          mt: 1.5,
                          mr: 2
                        }} />
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: '#333',
                              fontSize: '0.95rem',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#333',
                      mb: 1,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    3. 页面示例
                  </Typography>
                  <List sx={{ 
                    p: 1
                  }}>
                    {pageExamples.map((item, index) => (
                      <ListItem key={index} sx={{ 
                        py: 0.5,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <Box sx={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          bgcolor: '#666',
                          mt: 1.5,
                          mr: 2
                        }} />
                        <ListItemText 
                          primary={item}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: '#333',
                              fontSize: '0.95rem',
                              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mt: 2,
                    mb: 1,
                    fontWeight: 600,
                    color: '#333',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  本组件库较以往组件库新增内容
                </Typography>

                <List sx={{ 
                  p: 1
                }}>
                  {newFeatures.map((item, index) => (
                    <ListItem key={index} sx={{ 
                      py: 0.5,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <Box sx={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        bgcolor: '#666',
                        mt: 1.5,
                        mr: 2
                      }} />
                      <ListItemText 
                        primary={item}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: '#333',
                            fontSize: '0.95rem',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: '#333'
                  }}
                >
                  代码介绍
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    color: '#333',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    mb: 2
                  }}
                >
                  本组件库采用现代化的技术栈，代码结构清晰，易于维护和扩展。主要特点包括：
                </Typography>
                <List sx={{ 
                  p: 1
                }}>
                  <ListItem sx={{ 
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <Box sx={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      bgcolor: '#666',
                      mt: 1.5,
                      mr: 2
                    }} />
                    <ListItemText 
                      primary="基于 React 和 TypeScript，提供完整的类型支持"
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: '#333',
                          fontSize: '0.95rem',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ 
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <Box sx={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      bgcolor: '#666',
                      mt: 1.5,
                      mr: 2
                    }} />
                    <ListItemText 
                      primary="使用 Material-UI 作为基础组件库，确保组件质量"
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: '#333',
                          fontSize: '0.95rem',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ 
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <Box sx={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      bgcolor: '#666',
                      mt: 1.5,
                      mr: 2
                    }} />
                    <ListItemText 
                      primary="完善的文档和示例，方便开发者使用"
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: '#333',
                          fontSize: '0.95rem',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail; 