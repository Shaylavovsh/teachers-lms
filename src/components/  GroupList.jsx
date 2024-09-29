import GroupCard from "./ GroupCard";

const GroupList = ({ groupData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groupData.map((group) => (
        <GroupCard
          key={group.id}
          id={group.id}
          instructor={group.instructor}
          type={group.type}
          students={group.students}
          time={group.time}
          color={group.color}
        />
      ))}
    </div>
  );
};

export default GroupList;
