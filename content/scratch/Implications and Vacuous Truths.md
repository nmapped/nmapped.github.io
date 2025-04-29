## 1. Logical vs Factual Truth

**Logical truth** refers to a statement that is true by virtue of its logical form, regardless of any particular facts about the world. For example, the statement "If all humans are mortal and Socrates is a human, then Socrates is mortal" is logically true because of its structure.

**Factual truth**, on the other hand, refers to statements whose truth depends on empirical or observed reality. An example is "The Eiffel Tower is in Paris."

Logic provides a framework for analyzing the structure of reasoning. It does not evaluate the truth of premises in the real world but determines what conclusions must follow if those premises are true.

## 2. Truth Values in Propositional Logic

In propositional logic, every atomic proposition is assigned a truth value: either true (T) or false (F). These assignments are abstract and typically used to model real-world statements.

For example:
- Let $p$: "The moon is made of cheese." This is false.
- Let $q$: "The moon exists." This is true.

Statements involving $p$ and $q$ are analyzed according to formal rules without regard to their actual content.

## 3. The Logical Implication $(p → q)$

A logical implication $p \implies q$ is interpreted as "if $p$, then $q$." Its truth table is defined as follows:

| $p$ | $q$ | $p → q$ |
| --- | --- | ------- |
| T   | T   | T       |
| T   | F   | F       |
| F   | T   | T       |
| F   | F   | T       |

An implication is only false when the premise is true and the conclusion is false. If the premise is false, the implication is considered true regardless of the truth value of the conclusion. This is referred to as vacuous truth.

For example, the statement "If Fortune is a rabbit, then Charles has no money" is logically true if "Fortune is a rabbit" is false. The implication is not making a meaningful claim about the world; it is a truth of form.

## 4. Vacuous Truths

A vacuous truth arises when a universal statement refers to an empty domain or a false premise. In such cases, the statement is considered true because there are no counterexamples.

For instance:
- "All unicorns have horns" is logically true because there are no unicorns.
- "If 2 is greater than 3, then 1 = 0" is true because the premise is false.

This convention avoids logical contradictions and simplifies reasoning.

## 5. Relevance to Mathematics

Vacuous truths play an important role in formal mathematics, particularly when dealing with universal quantifiers.

Consider a universally quantified statement:
- $\forall x \in S, P(x)$

If the set S is empty, this statement is considered true. Since there are no elements in S, there are no counterexamples to $P(x)$.

Rejecting vacuous truth would require every universally quantified statement over an empty set to be false, which would introduce unnecessary complications and exceptions in formal proofs. By treating such statements as true, logic and mathematics remain consistent, general, and clean.

## 6. Summary

- Logical truth depends on form; factual truth depends on real-world evidence.
- Implications are only false when the premise is true and the conclusion is false.
- A false premise in an implication makes the statement vacuously true.
- Vacuous truths allow universal statements over empty domains to be handled consistently.
- The acceptance of vacuous truth is essential for the simplicity and generality of formal reasoning in logic and mathematics.