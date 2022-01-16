export default function _calculateAge(birthday) {
	const thisYear = new Date().getFullYear();
	const bithdayYear = new Date(birthday).getFullYear();
	return thisYear - bithdayYear;
}
