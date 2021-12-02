// 'https://www.youtube.com/watch?v=2IA4hl9smrg'
// 'https://www.youtube.com/embed/2IA4hl9smrg'

const link = 'https://www.youtube.com/watch?v=2IA4hl9smrg';
const embedLink = 'https://www.youtube.com/embed/2IA4hl9smrg';

R.pipe(
  R.match('[?&]' + 'v=([^&]+)'),
  R.head,
  R.split('='),
  R.last,
  R.concat(embedLink)
)(link)