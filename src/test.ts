export const test = () => {
    // https://zenn.dev/tsuboi/articles/c4f17185a6181f013108

    // 2 
    // 次の連想配列(images)のheightだけを取得し、新しい配列(heights)を作成して下さい。

    type Images = {
        height: string;
        width: string;
      }[];
      
      const images: Images = [
        { height: "20px", width: "40px" },
        { height: "34px", width: "56px" },
        { height: "28px", width: "64px" },
      ];

      const heights = images.map(({height}) => height)
      console.log(heights);
      
    // 3
    // 以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーに絞り込み、filteredUsersという変数に格納して下さい。
    type Users = {
        id: number;
        admin: Boolean;
      }[];
      
      const users: Users = [
        { id: 1, admin: true },
        { id: 2, admin: true },
        { id: 3, admin: false },
        { id: 4, admin: true },
        { id: 5, admin: false },
      ];

      const filteredUsers = users.filter(user => user.admin === true)
      console.log(filteredUsers);
      
      
    // ４
    // 以下の連想配列(users)の中から、管理者権限(admin)を持っている(true)ユーザーに絞り込み、filteredUsersという変数に格納して下さい。

    type Users4 = {
        id: number;
        admin: Boolean;
      }[];
      
      const users4: Users4 = [
        { id: 1, admin: true },
        { id: 2, admin: true },
        { id: 3, admin: false },
        { id: 4, admin: true },
        { id: 5, admin: false },
      ];

      const filteredUsers4 = users4.filter((user) => user.admin === true)
      console.log(filteredUsers4);

    // 5
    // 次の多次元配列のインデックス0番目のみを取り出した配列を作成して下さい。
    const array5 = [
        ["Ruffy", "captain"],
        ["Zoro", "combatant"],
      ];

    const newArray5 = array5[0]
    console.log(newArray5);
    
    // 7
    // 次の連想配列(member)の中から35歳以上の名前(name)の値だけを抜き取った配列が返るような関数getNameOver35を作成して下さい

    type Members = {
        name: string;
        age: number;
        gender: "male" | "female";
      }[];
      
      const members: Members = [
        { name: "松井", age: 39, gender: "male" },
        { name: "今田", age: 34, gender: "female" },
        { name: "鈴木", age: 24, gender: "male" },
        { name: "山田", age: 56, gender: "male" },
        { name: "田中", age: 89, gender: "female" },
      ];

      type GetOver35menbers<Members, U> = (array: Members) => U[]

      const getOver35menbers:GetOver35menbers<Members,string> = (array) => {
        return array.filter(({age}) => age > 34 ).map(((user) => user.name))
      } 

      console.log(getOver35menbers(members));

    // 8
    //以下のような重複値を含む配列arrの中から、重複値を除く互いに素な配列を作成して下さい。
    const arr8 = [2, 4, 7, 5, 4];

    // const newArray8 = new Set(arr8)

    const newArray8 = arr8.filter((num,i,arr) => {
        return arr.indexOf(num) === i
    })

    console.log(newArray8);

    // 9
    // 次の連想配列の中からnameプロパティをもったユーザーに絞り込み、getNameという変数に格納して下さい。
    interface User9 {
        id: number;
        name?: string;
      }
      
      const users9: User9[] = [
        { id: 1, name: "豊臣" },
        { id: 2 },
        { id: 3, name: "織田" },
      ];

    //   const getName9 = users9.filter(({name}) => name)
      const getName9 = users9.filter((user) => "name" in user)
      
      console.log(getName9);
    
    // 10
    // 次の連想配列(member)の中から,田中さんのオブジェクトを抽出するfindTanakaという関数,変数を作成しなさい。
    type member10 = {
        name: string;
        age: number;
        gender: "male" | "female";
    }[]

    const members10: member10 = [
        { name: "松井", age: 39, gender: "male" },
        { name: "今田", age: 34, gender: "female" },
        { name: "鈴木", age: 24, gender: "male" },
        { name: "山田", age: 56, gender: "male" },
        { name: "田中", age: 89, gender: "female" },
      ];

    const findTanaka = members10.find((({name}) => name === "田中"))
    console.log(findTanaka);

    // 11
    // アンケートを実施した結果がusersという連想配列に格納されています。ユーザー全員が回答済みかどうかを確認し、hasSubmitted変数に結果(trueかfalse)を示して下さい。

    type Users11 = {
        id: number;
        hasSubmitted: boolean;
      }[];
      
      const users11: Users11 = [
        { id: 2, hasSubmitted: true },
        { id: 3, hasSubmitted: false },
        { id: 4, hasSubmitted: true },
      ];

      const hasSubmitted = users11.every(({hasSubmitted}) => {hasSubmitted})
      console.log(hasSubmitted);
      
}