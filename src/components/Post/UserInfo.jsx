import moment from "moment/moment";

const UserInfo = ({ tweet }) => {
  let date = tweet.createdAt?.toDate();

  date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
      <p>{tweet.user.name}</p>
      <p className="text-gray-400 text-sm">
        @{tweet.user.name.toLowerCase().split("").join("_")}
      </p>
      <p className="text-gray-400 text-sm">1</p>
      {tweet.isEdit && <p className="text-gray-400 text-sm">Düzenlendi</p>}
    </div>
  );
};

export default UserInfo;
