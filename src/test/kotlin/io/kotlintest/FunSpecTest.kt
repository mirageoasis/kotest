package io.kotlintest

import io.kotlintest.matchers.Matchers
import io.kotlintest.specs.FunSpec

class FunSpecTest : Matchers, FunSpec() {

  init {

    test("ListStack.pop should remove the last element from stack") {
      val stack = ListStack<String>()
      stack.push("hello")
      stack.push("world")
      stack.size() shouldBe 2
      stack.pop() shouldBe "world"
      stack.size() shouldBe 1
    }

    test("ListStack.peek should leave the stack unmodified") {
      val stack = ListStack<String>()
      stack.push("hello")
      stack.push("world")
      stack.size() shouldBe 2
      stack.peek() shouldBe "world"
      stack.size() shouldBe 2
    }
  }
}