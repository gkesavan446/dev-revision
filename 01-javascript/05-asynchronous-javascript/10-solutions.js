const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

function getUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("User ID is required"));
      return;
    }
    setTimeout(() => resolve({ id, name: "Kesavan" }), 20);
  });
}

async function showUser() {
  try {
    console.log(await getUser(1));
  } catch (error) {
    console.log(error.message);
  }
}

async function timeoutExample() {
  try {
    const result = await Promise.race([
      getUser(1),
      delay(50).then(() => { throw new Error("Timed out"); })
    ]);
    console.log("Race result:", result);
  } catch (error) {
    console.log(error.message);
  }
}

async function independentRequests() {
  const jobs = [getUser(1), getUser(2), getUser(3)];
  console.log("All:", await Promise.all(jobs));

  const settled = await Promise.allSettled([getUser(1), getUser(), getUser(3)]);
  console.log("Settled:", settled);
}

async function main() {
  await showUser();
  await timeoutExample();
  await independentRequests();
}

main();

