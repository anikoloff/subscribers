import { useState, useEffect } from 'react';
import { Subscriber, Subscribers } from '../types';
import csvDownload from 'json-to-csv-export';

async function fetchSubscribers(): Promise<Subscribers> {
	// TODO: address pagination
	const response = await fetch('http://localhost:3000/subscribers?page=1&limit=20');
	const data: Subscribers = await response.json();
	return data;
}

const SubscribersTable: React.FC = () => {
	const [subscribers, setSubscribers] = useState<Subscribers>();
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetchSubscribers();
				setSubscribers(data);
			} catch (error) {
				setError('Error getting subscribers')
			}
		}
		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!subscribers){
		return <div className="wrapper-container"></div>;
	}

	const sortedList = subscribers.subscribers.sort((a, b) => {
		return b.created_at.localeCompare(a.created_at)
	})

	// TODO: work on a different method of exporing data as list of subscribers gets larger.
	const csvExport = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data: subscribers.subscribers as any,
		filename: 'subscribers',
		delimiter: ',',
		headers: ['ID', "First Name", "Last Name", "Email", "Subscription Date"]
	};

return (
	<div className="wrapper-container">
		<h3>Subscribers</h3> 
		<p>(ordered by subscription date)</p>
		
		<div className="table-responsive">      
			<table className="table table-hover">
				<thead>
					<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Subscription Date</th>
					</tr>
				</thead>
				<tbody>
				{sortedList.map((c: Subscriber) => (
					<tr key={c.id}>
							<td>{c.first_name}</td>
							<td>{c.last_name}</td>
							<td>{c.email}</td>
							<td>{c.created_at.split("T")[0]}</td>       
					</tr>
				))}
				</tbody>
			</table>
		</div>

		<button onClick={() => csvDownload(csvExport)}>Export to CSV</button>
	</div>
 )
}

export default SubscribersTable;