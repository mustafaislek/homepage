import Container from '../../components/container'

function AppsPage() {
  const apkFiles = [
    { name: 'Notis', link: '/apks/notis-010325.apk', date: '01.03.2025' },

  ];

  return (
    <Container>
      <h1 className="text-2xl font-bold">Uygulamalar</h1>
      <table className="min-w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2"></th>
            <th className="border border-gray-300 p-2">Tarih</th>
            <th className="border border-gray-300 p-2">İndir</th>
          </tr>
        </thead>
        <tbody>
          {apkFiles.map((apk, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{apk.name}</td>
              <td className="border border-gray-300 p-2">{apk.date}</td>
              <td className="border border-gray-300 p-2">
              <div className="flex justify-center items-center">
                  <a 
                    href={apk.link} 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    İndir
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default AppsPage; 