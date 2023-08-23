const InfoCard = (props: Info) => {
  const { englishDefinition, japaneseDefinition, jlptLevel } = props;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3">
              English
            </th>
            <th scope="col" className="px-6 py-3">
              Japanese
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{englishDefinition}</td>
            <td className="px-6 py-4">{japaneseDefinition}</td>
          </tr>
          <tr>
            <th scope="col" className="px-6 py-3">
              Level
            </th>
            <th scope="col" className="px-6 py-3">
              {jlptLevel}
            </th>
          </tr>
          <td></td>
        </tbody>
      </table>
    </div>
  );
};

type Info = {
  englishDefinition: string;
  japaneseDefinition: string;
  jlptLevel: string;
};

export default InfoCard;
