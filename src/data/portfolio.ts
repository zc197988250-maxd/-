export const metrics = [
  { value: '2', label: 'Episodes / Day', note: '稳定流程下' },
  { value: '1.5', label: 'min / Episode', note: '单集时长' },
  { value: '20', label: 'Assets / Day', note: '日均可用资产' },
  { value: '≈3', label: 'Iterations', note: '人物资产平均' },
  { value: '≈70%', label: 'First-pass Rate', note: '资产首轮通过率' },
]

export const projects = [
  { number: '01', title: '老摄影师', category: '人物资产', description: '人物全身、背面与面部细节设定。', image: '/assets/projects/character/老摄影师2.jpeg' },
  { number: '02', title: '清退者', category: '人物资产', description: '角色造型、材质与关键道具设定。', image: '/assets/projects/character/清退者.jpeg' },
  { number: '03', title: '机甲形态', category: '人物资产', description: '特殊形态与角色视觉方向设定。', image: '/assets/projects/character/机甲形态.png' },
  { number: '04', title: '职场女性', category: '人物资产', description: '人物外观与多角度一致性设定。', image: '/assets/projects/character/职场女1.png' },
  { number: '05', title: '芭蕾舞者', category: '人物资产', description: '人物体态、服装与造型细节设定。', image: '/assets/projects/character/芭蕾舞男.png' },
  { number: '06', title: '西方女性角色', category: '人物资产', description: '人物外观与服装方向设定。', image: '/assets/projects/character/西方女1.png' },
  { number: '07', title: '书羽', category: '人物资产', description: '人物形象与服装细节设定。', image: '/assets/projects/character/书羽.png' },
  { number: '08', title: '角色资产 01', category: '人物资产', description: '人物视觉资产与多视角设定。', image: '/assets/projects/character/1.png' },
]

export const capabilities = [
  ['01', 'AI 漫剧资产生成', '角色、场景、道具与妆造'],
  ['02', '一致性控制', '五官、服装、空间与跨镜头状态'],
  ['03', 'AI 视频制作', '图生视频、文生视频与镜头衔接'],
  ['04', '剧本与资产拆解', '从文本需求到生产清单'],
  ['05', 'Prompt Engineering', '提示词结构与视觉风格控制'],
  ['06', 'AI 创作工具', '多工具协同与高效迭代'],
]

export const workflow = [
  'Script', 'Breakdown', 'Character / Environment / Props', 'Storyboard',
  'Image Generation', 'Consistency Check', 'Video Generation', 'Edit',
]
