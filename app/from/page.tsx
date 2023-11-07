import {handleAction} from "next/dist/server/app-render/action-handler";
import {redirect} from "next/navigation";

const FromPage = async () => {
  console.log('FromPage');
  const handleAction = async () => {
    'use server';
    console.log('handleAction');
    redirect('/to')
  }
  return (
    <>
      <h1>From page</h1>
      <form>
        <button formAction={handleAction}>Redirect to</button>
      </form>
    </>
  );
};

export default FromPage;
