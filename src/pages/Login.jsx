import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    
    if (!name || !password) {
      setError('Имя и пароль обязательны');
      setLoading(false);
    } else if (name === 'begzod' && password === 'begzod') {
      setError('');
      setLoading(false);
      navigate('/');  // Redirect to the dashboard
    } else {
      setError('Неверное имя или пароль');
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <div className="relative flex w-[1019px] h-[643px] bg-white shadow-lg overflow-hidden rounded-[20px]">
        <div className="flex flex-col justify-center p-10 w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/5819/6d04/c6a59a2e5ea8afc03b503f11224dc4b1?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X53k2jU9fEzmP~FAWldi5mHh0MO3rWXE0D1sD~EX3eroQiwWTbwRrafBCvnIhKiHRpSspzd-z0zpbwBwxpqFxDR5tSudQ9Wwj4vwOo8Pe800sUNHtIXwz8G~EJv97a~G0zvoYOv2wsuFJuo-lglTYH~ZiKJ7IkKaXABK8aSc5v-Ny9ZR7b6ifbvYvw1eaKIo6whdtpq-HbtGf4H7brLv5MBCkuCycp-4kYFNGaYS7jz5236hB455yyx-sS0HRpOyS-SLOwpQv8lctmy-N2DvphoDF9vHDux~JcYQig0g3QiI3VIQCjOa5CeNyCly7sBb5zUlKz8A7~Olz8EsjgOgig__"
            alt="Logo"
            className="mb-10 ml-12"
            style={{ width: '188px', height: '48px', opacity: 1 }}
          />
          <div className="text-center mb-6 font-inter text-4xl font-bold text-[#0E0B5E]">
            Добро пожаловать
          </div>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <div className="left-20 font-inter text-lg font-normal text-black mb-1 ml-12">Name</div>
          <div className="flex items-center mb-4">
            <AiOutlineUser className="mr-3 text-gray-500 text-xl" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              className="border border-[#8C8C8C] rounded-full p-3 w-[386px] h-[53px] text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-left font-inter text-lg font-normal text-black mb-1 ml-12">Password</div>
          <div className="flex items-center mb-6">
            <AiOutlineLock className="mr-3 text-gray-500 text-xl" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              className="border border-[#8C8C8C] rounded-full p-3 w-[386px] h-[53px] text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            className="bg-red-500 text-white text-lg font-semibold transition w-[386px] h-[53px] rounded-[20px] mx-auto"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </div>

        <div className="w-1/2 h-full relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/ef82/678b/9c305351c332ab1e94b8c60af70cbd4b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxZWpEHR5WEkcTs-oW3Rck-MTQa9Wd0dvapgQEuuYkK41V20cISwCbd5fnX0vfIGrQ3ywcJfiWLaUrWFnSxEixW4W3aZO4oyeWWmNPHHblpnFWD9d5sIDKkxBZ3Am04aQqcGlmvPzOzhRhD0rMo5LZNllicT-bDSDtzoADiD8QJWXDUMvDq0rYH3z-R3NJqMaUSo9W6wX7x022gH5kmKAxvk5zf80yYf0IFUK3bdm~SlMjA2F3-jWarhlJjffCTf-lc6Oa5ErRtejZyUtZrh8L-l173qWM0j0gvdOcZxyEXT7oZIfCwiwS7aJNZTA968ikOEWw9~19Tu8M4WOpckhQ__"
            alt="Side Image"
            className="absolute top-[40px] right-10 w-[439px] h-[570px] object-cover opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
