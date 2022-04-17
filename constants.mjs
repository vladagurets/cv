const IM_GOOD_AT_TAGS = [
  'Docker',
  'JavaScript',
  'MongoDB',
  'NodeJS',
  'ReactJS',
  'Unix',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Data migration',
  'System migration',
  'Software designing',
  'Web development',
  'Interviewing',
  'Problem-solving',
  'GraphQL',
  'TypeScript',
  'Standardization',
  'Communication',
]

export const RANDOMIZED_IM_GOOD_AT_TAGS = IM_GOOD_AT_TAGS
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

export const EDUCATION = [
  {
    title: 'Master Computer Sciences in Kharkiv Aerospace University',
    years: '2016-2017'
  },
  {
    title: 'Bachelor Computer Sciences in Kharkiv Aerospace University',
    years: '2012-2016'
  },
  {
    title: 'Kharkiv Aerospace Lyceum',
    years: '2009-2012'
  }
]
