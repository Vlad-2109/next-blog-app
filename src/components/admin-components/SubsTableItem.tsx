import { SubsTableItemProps } from '@/types/types';

const SubsTableItem: React.FC<SubsTableItemProps> = ({ email, deleteEmail }) => {

    const emailDate = new Date(email.date);

	return (
		<tr className="bg-white border-b text-left">
			<td
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
				{email.email ? email.email : 'No email'}
			</td>
			<td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
			<td className="px-6 py-4 cursor-pointer" onClick={() => deleteEmail(email._id)}>x</td>
		</tr>
	);
};

export default SubsTableItem;
