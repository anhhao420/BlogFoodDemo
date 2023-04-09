import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Cake recipe</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src={require('./banh2.jpg')}
        alt=''
        style={{}}
      />
    </div>
  );
}
