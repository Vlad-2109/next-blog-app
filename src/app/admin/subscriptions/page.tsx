'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import SubsTableItem from '@/components/admin-components/SubsTableItem';
import { IEmail } from "@/types/types";

const SubscriptionsPage = () => {

	const [emails, setEmails] = useState<IEmail[]>([]);

	const fetchEmails = async () => {
		const response = await axios.get('/api/email');
		setEmails(response.data.emails);
	}

	const deleteEmail = async (mongoId: string) => {
		const response = await axios.delete('/api/email', { params: { id: mongoId } });
		if (response) {
			toast.success(response.data.message);
			fetchEmails();
		} else {
			toast.error('Error');
		}
	}

	useEffect(() => {
		fetchEmails();
	}, []);

	return (
		<div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
			<h1>All Subscriptions</h1>
			<div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
				<table className="w-full text-sm text-gray-500">
					<thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								Email Subscription
							</th>
							<th scope="col" className="hidden sm:block px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{emails.map((email) => (
							<SubsTableItem key={email._id} email={email} deleteEmail={deleteEmail} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SubscriptionsPage;
