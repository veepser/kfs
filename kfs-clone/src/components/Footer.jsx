const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f5f5f5',
      padding: '20px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p>veepser@yandex.ru</p>
      <p>© {new Date().getFullYear()} Все права защищены</p>
    </footer>
  );
};

export default Footer;