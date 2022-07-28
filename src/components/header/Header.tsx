import style from './Header.module.css';
import Logo from '../../assets/Logo.svg';

function Header() {
	return (
		<header className={style.wrapper}>
			<img src={Logo} alt="Imagem com o escrito to do e um foguete"/>
		</header>
	);
};

export default Header;