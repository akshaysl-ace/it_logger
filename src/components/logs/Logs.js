import React, { useEffect, useState } from 'react';
import Loader from '../layout/Loader';
import LogItem from './LogItem';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        const response = await fetch('/logs');
        const data = await response.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return <Loader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs !</p>) : (logs.map(log => <LogItem log={log} key={log.id} />))}
        </ul>
    );
}

export default Logs;