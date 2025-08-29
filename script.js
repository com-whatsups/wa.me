body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #111 url('https://ik.imagekit.io/sodejjlov/1746227035-116165-unknown-20250502-0715.gif') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.chat {
  background: #25D366;
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px 12px 12px 0;
  max-width: 70%;
  font-size: 15px;
  opacity: 0;
  transform: translateY(30px);
  animation: popIn 0.6s ease forwards;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  margin: 20px;
}

@keyframes popIn {
  0% {opacity: 0; transform: translateY(30px);}
  100% {opacity: 1; transform: translateY(0);}
}

.countdown {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
}
