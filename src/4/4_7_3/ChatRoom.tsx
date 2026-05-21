import { useEffect } from 'react';
import { createConnection, Options } from './chat';

export default function ChatRoom({ options }: { options: Options }) {

	const {serverUrl, roomId} = options;

  useEffect(() => {
    const connection = createConnection({serverUrl, roomId});
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
}
