import { ChevronRightIcon, UsersIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <UsersIcon className="h-12 w-12 text-orange-500" />
            <div>
              <h2 className="text-2xl font-bold">Mirzaaliyev Bekzod</h2>
              <div className="flex space-x-8 mt-2">
                <div>
                  <p className="text-sm text-gray-500">O'quvchilar soni</p>
                  <p className="text-xl font-semibold">73</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Guruhlar soni</p>
                  <p className="text-xl font-semibold">12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Grade</p>
            <p className="text-lg font-semibold">senior</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <UsersIcon className="h-6 w-6 text-orange-500 mr-2" />
              Groups
              <span className="text-orange-500 ml-2">(avgust)</span>
            </h3>
            <p className="text-2xl font-bold text-teal-600">17,482,507 <span className="text-sm font-normal text-gray-500">so'm</span></p>
          </div>
          <div className="space-y-4">
            {[
              { name: "FRONT-826", value: 1510167 },
              { name: "FRONT-908", value: 1012915 },
              { name: "FRONT-926", value: 1878503 },
              { name: "INPR-961", value: 1795000 },
              { name: "FRONT-998", value: 2136337 },
              { name: "FRONT-1012", value: 1473336 },
              { name: "FRONT-1010", value: 1399665 },
              { name: "INPR-1021", value: 1795000 },
              { name: "1063", value: 1326000 },
              { name: "1087", value: 847169 },
              { name: "INPR-1641", value: 1645417 },
            ].map((group) => (
              <div key={group.name} className="flex justify-between items-center border-b pb-2">
                <p className="font-medium">{group.name}</p>
                <div className="flex items-center">
                  <p className="font-semibold mr-2">{group.value.toLocaleString()} <span className="text-sm font-normal text-gray-500">so'm</span></p>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}