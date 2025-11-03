import React, { useEffect, useState } from 'react';

const useIsOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};

const IsOnlineHook = () => {
  const online = useIsOnline(); // ✅ just call it like a hook

  return (
    <div>
      {online ? <h3>Online ✅</h3> : <h3>Offline ❌</h3>}
    </div>
  );
};

export default IsOnlineHook;
