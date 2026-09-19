/*
TOPIC: EVENT DELEGATION

WHAT?
Event delegation attaches one listener to a parent and uses event bubbling to
handle events from matching descendants.

WHY?
It reduces listeners and automatically supports dynamically added child items.

INTERVIEW ANSWER
The event bubbles from the target through its ancestors. A parent listener can
inspect event.target or target.closest() to determine which child triggered it.
*/

if (typeof document !== "undefined") {
  const productList = document.querySelector("#product-list");

  productList?.addEventListener("click", event => {
    const deleteButton = event.target.closest("[data-delete-id]");

    if (!deleteButton || !productList.contains(deleteButton)) {
      return;
    }

    const productId = deleteButton.dataset.deleteId;
    console.log("Delete product:", productId);
  });
} else {
  console.log("Run the event-delegation example in a browser with #product-list.");
}

/*
HTML EXAMPLE
<ul id="product-list">
  <li>Phone <button data-delete-id="1">Delete</button></li>
  <li>Laptop <button data-delete-id="2">Delete</button></li>
</ul>

COMMON MISTAKES
- Using event.currentTarget when the clicked descendant is needed
- Matching only event.target when the button contains nested elements
- Forgetting that not every event bubbles
- Acting without confirming the matched element belongs to the expected parent

PRACTICE
Create a todo list with one parent click listener. Support dynamically added
complete and delete buttons using data attributes and closest().
*/

