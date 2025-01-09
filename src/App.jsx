import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';
import Contact from './pages/Contact';
import SubjectPage from './pages/SubjectPage'
import SubTopicPage from './pages/SubTopicPage'
import ArticlePage from './pages/ArticlePage'
import "./style.module.css";
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
function App() {
  const subjects = [
    {
      name: 'Mathematics',
      icon: 'icons/maths.png',
      link: '/mathematics',
      description: (
        <>
        <div className='alpha' style={{ textAlign: 'left' }}>
        <p><strong>Basic Arithmetic & Number Theory:</strong></p>
<ol>
  <li><strong>Addition is commutative:</strong> a + b = b + a</li>
  <li><strong>Addition is associative:</strong> (a + b) + c = a + (b + c)</li>
  <li><strong>Subtraction is the inverse of addition.</strong></li>
  <li><strong>Multiplication is commutative:</strong> a * b = b * a</li>
  <li><strong>Multiplication is associative:</strong> (a * b) * c = a * (b * c)</li>
  <li><strong>Multiplication is distributive over addition:</strong> a * (b + c) = a * b + a * c</li>
  <li><strong>Division is the inverse of multiplication.</strong></li>
  <li><strong>Any number multiplied by 0 is 0.</strong></li>
  <li><strong>Any number divided by 1 is itself.</strong></li>
  <li><strong>You cannot divide by 0.</strong></li>
  <li><strong>A prime number has exactly two distinct positive divisors: 1 and itself.</strong></li>
  <li><strong>The first few prime numbers are 2, 3, 5, 7, 11, 13...</strong></li>
  <li><strong>2 is the only even prime number.</strong></li>
  <li><strong>A composite number is a positive integer that has at least one divisor other than 1 and itself.</strong></li>
  <li><strong>The number 1 is neither prime nor composite.</strong></li>
  <li><strong>The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be uniquely represented as a product of prime numbers.</strong></li>
  <li><strong>An even number is divisible by 2.</strong></li>
  <li><strong>An odd number is not divisible by 2.</strong></li>
  <li><strong>A perfect square is an integer that is the square of an integer (e.g., 9 = 3²).</strong></li>
  <li><strong>A perfect cube is an integer that is the cube of an integer (e.g., 27 = 3³).</strong></li>
  <li><strong>The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.</strong></li>
  <li><strong>0! = 1 (by definition).</strong></li>
  <li><strong>The greatest common divisor (GCD) of two integers is the largest integer that divides both of them.</strong></li>
  <li><strong>The least common multiple (LCM) of two integers is the smallest positive integer that is divisible by both of them.</strong></li>
  <li><strong>For any two positive integers a and b, GCD(a, b) * LCM(a, b) = a * b.</strong></li>
  <li><strong>A rational number can be expressed as a fraction p/q, where p and q are integers and q is not zero.</strong></li>
  <li><strong>An irrational number cannot be expressed as a simple fraction.</strong></li>
  <li><strong>Examples of irrational numbers include √2 and π.</strong></li>
  <li><strong>Real numbers include both rational and irrational numbers.</strong></li>
  <li><strong>Integers include positive and negative whole numbers and zero.</strong></li>
  <li><strong>Whole numbers include zero and the positive integers.</strong></li>
  <li><strong>Natural numbers are the positive integers (some definitions include zero).</strong></li>
</ol>
<p><strong>Algebra & Equations:</strong></p>
<ol>
  <li><strong>An equation is a statement that two expressions are equal.</strong></li>
  <li><strong>Solving an equation means finding the value(s) of the variable(s) that make the equation true.</strong></li>
  <li><strong>The order of operations (PEMDAS/BODMAS) dictates the sequence in which operations should be performed: Parentheses/Brackets, Exponents/Orders, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).</strong></li>
  <li><strong>A variable is a symbol (usually a letter) that represents an unknown quantity.</strong></li>
  <li><strong>A coefficient is a number multiplied by a variable.</strong></li>
  <li><strong>An exponent indicates how many times a base number is multiplied by itself.</strong></li>
  <li><strong>Any non-zero number raised to the power of 0 is 1.</strong></li>
  <li><strong>Any number raised to the power of 1 is itself.</strong></li>
  <li><strong>A negative exponent indicates a reciprocal: a⁻ⁿ = 1/aⁿ.</strong></li>
  <li><strong>The square root of a number x is a number y such that y² = x.</strong></li>
  <li><strong>The cube root of a number x is a number y such that y³ = x.</strong></li>
    <li><strong>A polynomial is an expression consisting of variables and coefficients, involving only the operations of addition, subtraction, multiplication, and non-negative integer exponents.</strong></li>
  <li><strong>A linear equation is a polynomial equation of degree one.</strong></li>
  <li><strong>A quadratic equation is a polynomial equation of degree two.</strong></li>
    <li><strong>The quadratic formula provides the solutions to a quadratic equation of the form ax² + bx + c = 0: x = (-b ± √(b² - 4ac)) / 2a.</strong></li>
  <li><strong>A system of equations is a set of two or more equations with the same variables.</strong></li>
    <li><strong>Logarithms are the inverse of exponentiation: if bˣ = y, then log<sub>b</sub>(y) = x.</strong></li>
  <li><strong>The base-10 logarithm is called the common logarithm (log).</strong></li>
   <li><strong>The base-e logarithm is called the natural logarithm (ln).</strong></li>
</ol>
<p><strong>Geometry:</strong></p>
<ol>
  <li><strong>A point has no dimension.</strong></li>
    <li><strong>A line is a one-dimensional figure that extends infinitely in both directions.</strong></li>
  <li><strong>A line segment is a part of a line that is bounded by two distinct end points.</strong></li>
    <li><strong>A ray is a part of a line that starts at one point and extends infinitely in one direction.</strong></li>
  <li><strong>An angle is formed by two rays that share a common endpoint (vertex).</strong></li>
  <li><strong>Angles are measured in degrees or radians.</strong></li>
  <li><strong>A right angle measures 90 degrees.</strong></li>
    <li><strong>An acute angle measures less than 90 degrees.</strong></li>
  <li><strong>An obtuse angle measures greater than 90 degrees and less than 180 degrees.</strong></li>
  <li><strong>A straight angle measures 180 degrees.</strong></li>
    <li><strong>Complementary angles add up to 90 degrees.</strong></li>
  <li><strong>Supplementary angles add up to 180 degrees.</strong></li>
    <li><strong>Parallel lines are lines in a plane that do not intersect.</strong></li>
    <li><strong>Perpendicular lines are lines that intersect at a right angle.</strong></li>
  <li><strong>A polygon is a closed plane figure made up of line segments.</strong></li>
  <li><strong>A triangle is a polygon with three sides.</strong></li>
  <li><strong>The sum of the angles in a triangle is 180 degrees.</strong></li>
    <li><strong>An equilateral triangle has three equal sides and three equal angles (60 degrees each).</strong></li>
    <li><strong>An isosceles triangle has two equal sides and two equal angles.</strong></li>
  <li><strong>A scalene triangle has no equal sides and no equal angles.</strong></li>
  <li><strong>A right triangle has one right angle.</strong></li>
  <li><strong>The Pythagorean Theorem states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides: a² + b² = c².</strong></li>
   <li><strong>A quadrilateral is a polygon with four sides.</strong></li>
  <li><strong>The sum of the angles in a quadrilateral is 360 degrees.</strong></li>
   <li><strong>A parallelogram is a quadrilateral with two pairs of parallel sides.</strong></li>
  <li><strong>A rectangle is a parallelogram with four right angles.</strong></li>
   <li><strong>A square is a rectangle with four equal sides.</strong></li>
  <li><strong>A rhombus is a parallelogram with four equal sides.</strong></li>
  <li><strong>A trapezoid (or trapezium) is a quadrilateral with at least one pair of parallel sides.</strong></li>
  <li><strong>A circle is the set of all points in a plane that are at a given distance (radius) from a given point (center).</strong></li>
  <li><strong>The diameter of a circle is twice the radius.</strong></li>
    <li><strong>The circumference of a circle is the distance around it: C = 2πr or C = πd.</strong></li>
    <li><strong>The area of a circle is A = πr².</strong></li>
  <li><strong>Pi (π) is an irrational number approximately equal to 3.14159.</strong></li>
  <li><strong>A sphere is the set of all points in three-dimensional space that are at a given distance (radius) from a given point (center).</strong></li>
    <li><strong>The surface area of a sphere is A = 4πr².</strong></li>
  <li><strong>The volume of a sphere is V = (4/3)πr³.</strong></li>
    <li><strong>A cube is a three-dimensional solid with six square faces.</strong></li>
  <li><strong>The volume of a cube with side length s is V = s³.</strong></li>
  <li><strong>A rectangular prism (or cuboid) is a three-dimensional solid with six rectangular faces.</strong></li>
    <li><strong>The volume of a rectangular prism with length l, width w, and height h is V = lwh.</strong></li>
  <li><strong>A cylinder is a three-dimensional solid with two parallel circular bases connected by a curved surface.</strong></li>
   <li><strong>The volume of a cylinder with radius r and height h is V = πr²h.</strong></li>
   <li><strong>A cone is a three-dimensional solid that tapers smoothly from a flat base (usually circular) to a point (apex or vertex).</strong></li>
  <li><strong>The volume of a cone with radius r and height h is V = (1/3)πr²h.</strong></li>
</ol>
<p><strong>Calculus & Analysis:</strong></p>
<ol>
  <li><strong>Calculus is the mathematical study of continuous change.</strong></li>
  <li><strong>A limit describes the value that a function or sequence "approaches" as the input or index approaches some value.</strong></li>
  <li><strong>A derivative measures the instantaneous rate of change of a function.</strong></li>
  <li><strong>Integration is the inverse operation of differentiation.</strong></li>
    <li><strong>An integral represents the area under a curve.</strong></li>
    <li><strong>The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration.</strong></li>
</ol>
<p><strong>Statistics & Probability:</strong></p>
<ol>
  <li><strong>Statistics is the science of collecting, analyzing, interpreting, presenting, and organizing data.</strong></li>
  <li><strong>Probability is the measure of the likelihood that an event will occur.</strong></li>
  <li><strong>Probability is expressed as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.</strong></li>
   <li><strong>The mean (average) is the sum of a set of values divided by the number of values.</strong></li>
  <li><strong>The median is the middle value in a sorted set of data.</strong></li>
  <li><strong>The mode is the value that appears most frequently in a set of data.</strong></li>
   <li><strong>The range is the difference between the highest and lowest values in a set of data.</strong></li>
  <li><strong>The standard deviation measures the dispersion of a set of data around its mean.</strong></li>
</ol>
<p><strong>Number Systems & Bases:</strong></p>
<ol>
    <li><strong>The decimal system (base-10) uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.</strong></li>
    <li><strong>The binary system (base-2) uses two digits: 0 and 1.</strong></li>
    <li><strong>The octal system (base-8) uses eight digits: 0, 1, 2, 3, 4, 5, 6, 7.</strong></li>
    <li><strong>The hexadecimal system (base-16) uses sixteen symbols: 0-9 and A-F.</strong></li>
</ol>
<p><strong>Famous Numbers & Constants:</strong></p>
<ol>
    <li><strong>Pi (π) is the ratio of a circle's circumference to its diameter.</strong></li>
    <li><strong>e (Euler's number) is an irrational number approximately equal to 2.71828, the base of the natural logarithm.</strong></li>
    <li><strong>The golden ratio (φ, phi) is approximately 1.61803, often found in nature and art.</strong></li>
  <li><strong>Infinity (∞) is a concept representing a quantity without any bound or limit.</strong></li>
  <li><strong>Zero (0) is the additive identity.</strong></li>
</ol>
<p><strong>Mathematical Concepts & Principles:</strong></p>
<ol>
   <li><strong>Symmetry refers to a correspondence of form or arrangement on opposite sides of a dividing line or plane or center.</strong></li>
   <li><strong>Tessellation is the tiling of a plane using one or more geometric shapes, called tiles, with no overlaps and no gaps.</strong></li>
    <li><strong>Fractals are self-similar patterns that repeat at different scales.</strong></li>
    <li><strong>A set is a well-defined collection of distinct objects, considered as an object in its own right.</strong></li>
  <li><strong>A function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output.</strong></li>
    <li><strong>A graph is a visual representation of data or relationships between quantities.</strong></li>
    <li><strong>A proof is a logical argument that establishes the truth of a mathematical statement.</strong></li>
  <li><strong>A theorem is a statement that has been proven to be true.</strong></li>
  <li><strong>A conjecture is a statement that is believed to be true but has not yet been proven.</strong></li>
    <li><strong>An axiom is a statement that is accepted as true without proof.</strong></li>
    <li><strong>Induction is a method of mathematical proof typically used to establish a given statement for all natural numbers.</strong></li>
    <li><strong>Deduction is a logical process in which a conclusion is based on the concordance of multiple premises that are generally assumed to be true.</strong></li>
    <li><strong>Infinity comes in different sizes (e.g., the infinity of real numbers is larger than the infinity of natural numbers).</strong></li>
   <li><strong>Topology is a branch of mathematics that studies the properties of geometric objects that are preserved under continuous deformations, such as stretching, twisting, crumpling, and bending, but not tearing or gluing.</strong></li>
</ol>
<p><strong>Historical Math Facts:</strong></p>
<ol>
  <li><strong>The concept of zero was independently developed in various cultures.</strong></li>
    <li><strong>Ancient Egyptians and Babylonians had sophisticated mathematical knowledge.</strong></li>
  <li><strong>Euclid's "Elements" is one of the most influential works in the history of mathematics.</strong></li>
   <li><strong>Archimedes made significant contributions to geometry and calculus.</strong></li>
  <li><strong>The development of algebra is often attributed to Islamic mathematicians.</strong></li>
  <li><strong>Isaac Newton and Gottfried Wilhelm Leibniz are credited with the independent development of calculus.</strong></li>
    <li><strong>The Fibonacci sequence (1, 1, 2, 3, 5, 8...) appears in various natural phenomena.</strong></li>
  <li><strong>The abacus is an ancient calculation tool.</strong></li>
    <li><strong>The slide rule was a mechanical analog computer used for multiplication and division.</strong></li>
</ol>
<p><strong>Fun Math Facts:</strong></p>
<ol>
   <li><strong>The number 12,345,679 multiplied by 9 gives 111,111,111.</strong></li>
  <li><strong>The word "hundred" comes from the Old Norse word "hundrath," which actually means 120.</strong></li>
   <li><strong>A "googol" is the number 1 followed by 100 zeros (10¹⁰⁰).</strong></li>
  <li><strong>A "googolplex" is 1 followed by a googol of zeros (10<sup>googol</sup>).</strong></li>
  <li><strong>The Mobius strip is a surface with only one side and one boundary.</strong></li>
    <li><strong>The shape of a honeycomb is hexagonal because this shape efficiently uses space and material.</strong></li>
   <li><strong>The sum of the first *n* natural numbers is *n*( *n* + 1) / 2.</strong></li>
  <li><strong>The sum of the first *n* odd numbers is *n*².</strong></li>
   <li><strong>A palindrome is a number that reads the same forwards and backward (e.g., 121).</strong></li>
  <li><strong>Amicable numbers are two different numbers such that the sum of the proper divisors of each is equal to the other number (e.g., 220 and 284).</strong></li>
   <li><strong>Perfect numbers are positive integers that are equal to the sum of their proper positive divisors (e.g., 6 = 1 + 2 + 3).</strong></li>
  <li><strong>There are infinitely many prime numbers (proven by Euclid).</strong></li>
    <li><strong>No one has ever found an odd perfect number, but it hasn't been proven that they don't exist.</strong></li>
</ol>
<p><strong>More Advanced Concepts (Briefly):</strong></p>
<ol>
   <li><strong>Complex numbers extend the real numbers by including the imaginary unit *i*, where *i*² = -1.</strong></li>
    <li><strong>Linear algebra deals with vectors, matrices, and linear transformations.</strong></li>
    <li><strong>Group theory studies algebraic structures called groups.</strong></li>
   <li><strong>Set theory is a branch of mathematical logic that studies sets.</strong></li>
   <li><strong>Game theory is the study of mathematical models of strategic interaction among rational agents.</strong></li>
    <li><strong>Chaos theory studies the behavior of dynamical systems that are highly sensitive to initial conditions.</strong></li>
    <li><strong>Number theory has many unsolved problems, such as the Riemann Hypothesis and the Twin Prime Conjecture.</strong></li>
    <li><strong>Fourier analysis is the study of how general functions can be represented or approximated by sums of simpler trigonometric functions.</strong></li>
     <li><strong>Differential equations relate a function with its derivatives.</strong></li>
</ol>
<p><strong>Mathematical Notations & Symbols:</strong></p>
<ol>
    <li><strong>The symbol "+" represents addition.</strong></li>
    <li><strong>The symbol "-" represents subtraction.</strong></li>
    <li><strong>The symbol "×" or "⋅" represents multiplication.</strong></li>
    <li><strong>The symbol "÷" or "/" represents division.</strong></li>
    <li><strong>The symbol "=" represents equality.</strong></li>
  <li><strong>The symbol "≠" represents inequality.</strong></li>
  <ul>
  <li><strong>The symbol "&lt;" represents "less than".</strong></li>
  <li><strong>The symbol "&gt;" represents "greater than".</strong></li>
</ul>

    <li><strong>The symbol "≤" represents "less than or equal to".</strong></li>
  <li><strong>The symbol "≥" represents "greater than or equal to".</strong></li>
  <li><strong>The symbol "√" represents the square root.</strong></li>
    <li><strong>The symbol "π" represents pi.</strong></li>
    <li><strong>The symbol "e" represents Euler's number.</strong></li>
    <li><strong>The symbol "∞" represents infinity.</strong></li>
    <li><strong>The symbol "∑" represents summation.</strong></li>
  <li><strong>The symbol "∫" represents integration.</strong></li>
   <li><strong>The symbol "!" represents factorial.</strong></li>
     <li><strong>The symbol "Δ" (delta) often represents a change in a quantity.</strong></li>
</ol>
<p><strong>Connections to Other Fields:</strong></p>
<ol>
  <li><strong>Mathematics is the language of science.</strong></li>
    <li><strong>Physics relies heavily on mathematical models.</strong></li>
  <li><strong>Computer science is built on mathematical foundations.</strong></li>
   <li><strong>Economics uses mathematical tools for analysis and modeling.</strong></li>
  <li><strong>Cryptography uses number theory to secure information.</strong></li>
    <li><strong>Statistics is crucial for data analysis in many fields.</strong></li>
</ol>
<p><strong>Mathematical Structures:</strong></p>
<ol>
  <li><strong>A group is a set equipped with a binary operation that satisfies certain axioms (closure, associativity, identity, inverse).</strong></li>
  <li><strong>A ring is an algebraic structure with two binary operations (usually called addition and multiplication) satisfying certain axioms.</strong></li>
  <li><strong>A field is a ring in which every non-zero element has a multiplicative inverse.</strong></li>
    <li><strong>A vector space is a set of vectors that can be added together and multiplied by scalars.</strong></li>
</ol>
<p><strong>Interesting Mathematical Results:</strong></p>
<ol>
  <li><strong>Euler's identity: e<sup>iπ</sup> + 1 = 0, connects five fundamental mathematical constants.</strong></li>
  <li><strong>Fermat's Last Theorem states that no three positive integers can satisfy the equation aⁿ + bⁿ = cⁿ for any integer value of n greater than two.</strong></li>
    <li><strong>Gödel's incompleteness theorems state that within any consistent formal system powerful enough to describe the arithmetic of the natural numbers, there are true statements that cannot be proven within the system itself.</strong></li>
      <li><strong>The Banach-Tarski paradox states that a solid ball can be decomposed into a finite number of non-overlapping pieces, which can then be reassembled in a different way to yield two identical copies of the original ball.</strong></li>
</ol>
<p><strong>Final Few:</strong></p>
<ol>
    <li><strong>Mathematics is constantly evolving with new discoveries being made.</strong></li>
    <li><strong>Mathematical thinking helps develop problem-solving skills.</strong></li>
  <li><strong>There are many different branches and specializations within mathematics.</strong></li>
    <li><strong>Mathematics is a universal language.</strong></li>
</ol>
        </div>
        </>
      ),
      subTopics: [
        { name: 'Algebra', id: 'algebra' },
        { name: 'Calculus', id: 'calculus' },
        { name: 'Geometry', id: 'geometry' },
      ],
      articles: [
        { title: 'Introduction to Algebra', content: (<p>This is the content of introduction to Algebra, with id: intro-algebra.</p>), tableOfContents: [{ title: 'Introduction to Algebra', id: 'intro-algebra' }] },
        { title: 'Understanding Calculus', content: (<p>This is the content of understanding calculus, with id: understanding-calculus.</p>), tableOfContents: [{ title: 'Understanding Calculus', id: 'understanding-calculus' }] },
        { title: 'Basics of Geometry', content: (<p>This is the content of basics of geometry, with id: basics-geometry.</p>), tableOfContents: [{ title: 'Basics of Geometry', id: 'basics-geometry' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'Physics',
      icon: 'icons/physics.png',
      link: '/physics',
      description: (
        <>
        <div style={{textAlign:'left'}}>
          <p><strong>Mechanics & Motion</strong></p>
          <ol>
            <li>The acceleration due to gravity on Earth is approximately 9.81 m/s².</li>
            <li>The speed of light in a vacuum is about 299,792,458 meters per second.</li>
            <li>For every action, there is an equal and opposite reaction (Newton's Third Law).</li>
            <li>An object in motion tends to stay in motion with the same velocity unless acted upon by an external force (Newton's First Law).</li>
            <li>Kinetic energy increases with the square of the velocity.</li>
            <li>Air resistance increases with the square of the speed of an object moving through it.</li>
            <li>The efficiency of a simple machine is always less than 100% due to friction.</li>
            <li>Terminal velocity is the constant speed that a freely falling object eventually reaches when the resistance of the medium through which it is falling prevents further acceleration.</li>
            <li>The period of a simple pendulum is proportional to the square root of its length.</li>
            <li>The momentum of a closed system remains constant.</li>
          </ol>
          <p><strong>Thermodynamics & Heat</strong></p>
          <ol>
            <li>Absolute zero is 0 Kelvin (-273.15 °C).</li>
            <li>The heat required to raise the temperature of 1 gram of water by 1 degree Celsius is 1 calorie (or 4.184 Joules).</li>
            <li>The entropy of a closed system tends to increase over time (Second Law of Thermodynamics).</li>
            <li>Heat flows spontaneously from a hotter object to a colder object.</li>
            <li>Convection is a more efficient mode of heat transfer in fluids (liquids and gases).</li>
            <li>The specific heat capacity of water is relatively high compared to other substances.</li>
            <li>In a heat engine, the maximum efficiency is limited by the temperature difference between the hot and cold reservoirs (Carnot Cycle).</li>
            <li>Thermal expansion is generally more significant for solids than for liquids or gases.</li>
            <li>The amount of heat required for a phase change is known as latent heat.</li>
            <li>The average kinetic energy of gas particles is proportional to its temperature.</li>
          </ol>
          <p><strong>Electromagnetism</strong></p>
          <ol>
            <li>Like charges repel, and opposite charges attract.</li>
            <li>The electromagnetic force is one of the four fundamental forces of nature.</li>
            <li>The magnetic force is exerted by moving charges, such as electrons.</li>
            <li>A changing magnetic field creates an electric field, and vice versa (Faraday's Law and Maxwell's Equations).</li>
            <li>Electric current is measured in Amperes (A).</li>
            <li>Voltage is measured in Volts (V).</li>
            <li>Resistance is measured in Ohms (Ω).</li>
            <li>The strength of an electromagnet is proportional to the current and the number of coils.</li>
            <li>The speed of electromagnetic waves in vacuum is the speed of light.</li>
            <li>Capacitors store electrical energy.</li>
          </ol>
          <p><strong>Optics</strong></p>
          <ol>
            <li>The angle of incidence equals the angle of reflection for light reflecting off a smooth surface.</li>
            <li>Light bends (refracts) when it passes from one medium to another with different refractive indexes.</li>
            <li>Concave lenses diverge light rays, whereas convex lenses converge them.</li>
            <li>The wavelength of visible light ranges from approximately 400 nm (violet) to 700 nm (red).</li>
            <li>The shorter the wavelength of light, the higher its frequency.</li>
            <li>White light is a combination of all the colors of the visible spectrum.</li>
            <li>The magnification of a lens is the ratio of the image height to the object height.</li>
            <li>The resolution of an optical instrument is limited by the wavelength of light.</li>
            <li>Polarized light has electric field oscillations in one plane.</li>
            <li>The intensity of light decreases as the square of the distance from the source.</li>
          </ol>
          <p><strong>Quantum Mechanics & Modern Physics</strong></p>
          <ol>
            <li>Energy is quantized and comes in discrete packets called photons.</li>
            <li>The wave-particle duality: particles can exhibit wave-like properties, and waves can exhibit particle-like properties.</li>
            <li>The uncertainty principle states that there is a fundamental limit to the precision with which certain pairs of physical properties of a particle, known as complementary variables, such as position and momentum, can be known.</li>
            <li>The energy of a photon is proportional to its frequency (E=hf).</li>
            <li>Radioactive decay is a probabilistic process governed by a half-life.</li>
            <li>Nuclear fusion is the process that powers the sun.</li>
            <li>The speed of the particles in the nucleus is a significant fraction of the speed of light.</li>
            <li>Quantum entanglement is a correlation between particles that is stronger than any classical correlation.</li>
            <li>Superconductivity is a state in which certain materials have zero electrical resistance below a critical temperature.</li>
            <li>The Standard Model describes the fundamental particles and forces of nature (excluding gravity).</li>
          </ol>
          <p><strong>Astronomy & Astrophysics</strong></p>
          <ol>
            <li>The Earth's diameter is approximately 12,742 km.</li>
            <li>The Earth's circumference is roughly 40,075 km.</li>
            <li>The Sun's mass makes up about 99.86% of the total mass of our solar system.</li>
            <li>The distance from the Earth to the Sun is approximately 149.6 million kilometers (1 astronomical unit).</li>
            <li>Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.</li>
            <li>A light-year is the distance that light travels in one year, approximately 9.461 x 10^12 km.</li>
            <li>The Milky Way galaxy is estimated to contain 100–400 billion stars.</li>
            <li>Black holes are regions of spacetime with such strong gravity that nothing, not even light, can escape them.</li>
            <li>The universe is expanding, as evidenced by the redshift of distant galaxies.</li>
            <li>The cosmic microwave background radiation is the afterglow of the Big Bang.</li>
          </ol>
          <p><strong>Nuclear Physics & Particle Physics</strong></p>
          <ol>
            <li>Atoms are primarily empty space, with most of the mass concentrated in the nucleus.</li>
            <li>The nucleus of an atom contains protons and neutrons (except for hydrogen which has one proton and no neutrons in the common isotope).</li>
            <li>Protons have a positive charge, and electrons have a negative charge.</li>
            <li>Neutrons are neutral, carrying no electric charge.</li>
            <li>Isotopes of an element have the same number of protons but different numbers of neutrons.</li>
            <li>Nuclear fission is the process of splitting atomic nuclei into smaller parts, releasing a large amount of energy.</li>
            <li>Quarks are fundamental particles that combine to form protons and neutrons.</li>
            <li>Neutrinos are subatomic particles with very small mass and no charge.</li>
            <li>The Higgs boson is a fundamental particle associated with the Higgs field, which gives mass to other particles.</li>
            <li>Antimatter has the same mass as matter but opposite charge.</li>
          </ol>
          <p><strong>Waves & Sound</strong></p>
          <ol>
            <li>Sound is a mechanical wave that travels through a medium.</li>
            <li>The speed of sound in air at room temperature is approximately 343 m/s.</li>
            <li>The frequency of a sound wave determines its pitch.</li>
            <li>The amplitude of a sound wave determines its loudness.</li>
            <li>The Doppler effect is the change in frequency of a wave for an observer moving relative to the source.</li>
            <li>Interference occurs when two or more waves meet and superimpose.</li>
            <li>Diffraction is the bending of waves around obstacles.</li>
            <li>Resonance is the tendency of a system to oscillate with greater amplitude at specific frequencies.</li>
            <li>Ultrasound uses sound waves with frequencies higher than the audible range.</li>
            <li>The speed of a wave is the product of its frequency and wavelength.</li>
          </ol>
          <p><strong>Fluids & Materials</strong></p>
          <ol>
            <li>Pressure in a fluid is transmitted equally in all directions (Pascal's principle).</li>
            <li>Buoyancy is the upward force exerted by a fluid on an immersed object.</li>
            <li>Viscosity is the measure of a fluid's resistance to flow.</li>
            <li>Surface tension is the tendency of a liquid surface to minimize its area.</li>
            <li>Density is mass per unit volume.</li>
            <li>Stress is the force acting per unit area on a material.</li>
            <li>Strain is the measure of deformation of a material.</li>
            <li>Young's modulus is a measure of a material's stiffness.</li>
            <li>Shear modulus is a measure of a material's resistance to deformation by shear stress.</li>
            <li>Poisson's ratio describes how a material deforms in one direction when strained in another.</li>
          </ol>
          <p><strong>General & Miscellaneous</strong></p>
          <ol>
            <li>The SI unit of force is the Newton (N).</li>
            <li>The SI unit of energy is the Joule (J).</li>
            <li>The SI unit of power is the Watt (W).</li>
            <li>The SI unit of time is the second (s).</li>
            <li>The SI unit of electric charge is the Coulomb (C).</li>
            <li>The SI unit of temperature is the Kelvin (K).</li>
            <li>The scientific method is a systematic process for acquiring knowledge.</li>
            <li>Dimensional analysis is a tool to check the consistency of equations.</li>
            <li>Symmetry plays a crucial role in many areas of physics.</li>
            <li>Many physical phenomena can be described using mathematical equations.</li>
          </ol>
          </div>
        </>
      ),
      subTopics: [
        { name: 'Mechanics', id: 'mechanics' },
        { name: 'Thermodynamics', id: 'thermodynamics' },
        { name: 'Electromagnetism', id: 'electromagnetism' },
      ],
      articles: [
        { title: 'Introduction to Mechanics', content: (<p>This is the content of introduction to mechanics, with id: intro-mechanics.</p>), tableOfContents: [{ title: 'Introduction to Mechanics', id: 'intro-mechanics' }] },
        { title: 'Understanding Thermodynamics', content: (<p>This is the content of understanding thermodynamics, with id: understanding-thermodynamics.</p>), tableOfContents: [{ title: 'Understanding Thermodynamics', id: 'understanding-thermodynamics' }] },
        { title: 'Introduction to Electromagnetism', content: (<p>This is the content of introduction to electromagnetism, with id: intro-electromagnetism.</p>), tableOfContents: [{ title: 'Introduction to Electromagnetism', id: 'intro-electromagnetism' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'Chemistry',
      icon: 'icons/chemistry.png',
      link: '/chemistry',
      description: (
        <>
        <div style={{textAlign:'left'}}>
        <p><strong>Basic Chemistry & Composition</strong></p>
<ol>
  <li>There are 118 known elements on the periodic table.</li>
  <li>Approximately 90 of the elements occur naturally on Earth.</li>
  <li>Hydrogen is the most abundant element in the universe.</li>
  <li>Oxygen is the most abundant element in the Earth's crust.</li>
  <li>The human body is primarily composed of oxygen, carbon, hydrogen, nitrogen, calcium, and phosphorus.</li>
  <li>Water (H₂O) is a polar molecule.</li>
  <li>The pH scale ranges from 0 to 14, with 7 being neutral.</li>
  <li>Acids have a pH less than 7, while bases have a pH greater than 7.</li>
  <li>The molar mass of water is approximately 18 g/mol.</li>
  <li>Avogadro's number is approximately 6.022 x 10^23, representing the number of atoms/molecules in one mole.</li>
</ol>
<p><strong>Atoms, Bonding, & Structure</strong></p>
<ol>
  <li>Atoms are composed of protons, neutrons, and electrons.</li>
  <li>Protons have a positive charge, electrons have a negative charge, and neutrons have no charge.</li>
  <li>The number of protons determines the element.</li>
  <li>Isotopes are atoms of the same element with different numbers of neutrons.</li>
  <li>Electrons reside in specific energy levels or shells around the nucleus.</li>
  <li>Covalent bonds involve the sharing of electrons between atoms.</li>
  <li>Ionic bonds involve the transfer of electrons between atoms.</li>
  <li>Metallic bonds are found in metals and involve a "sea" of electrons.</li>
  <li>The shape of a molecule is determined by the arrangement of its atoms and electron pairs (VSEPR theory).</li>
  <li>A mole is the amount of a substance that contains as many elementary entities as there are atoms in 12 grams of carbon-12.</li>
</ol>
<p><strong>Chemical Reactions & Stoichiometry</strong></p>
<ol>
  <li>Chemical reactions involve the breaking and formation of chemical bonds.</li>
  <li>A catalyst speeds up a chemical reaction without being consumed in the reaction.</li>
  <li>The rate of a chemical reaction can be affected by temperature, concentration, and catalysts.</li>
  <li>Stoichiometry is the study of the quantitative relationships between reactants and products in a chemical reaction.</li>
  <li>A limiting reactant is the reactant that is completely used up in a reaction.</li>
  <li>Exothermic reactions release heat, while endothermic reactions absorb heat.</li>
  <li>Activation energy is the minimum energy required for a reaction to occur.</li>
  <li>Oxidation is the loss of electrons, while reduction is the gain of electrons.</li>
  <li>Balancing chemical equations ensures that the number of atoms of each element is conserved.</li>
  <li>Equilibrium is a state where the rates of forward and reverse reactions are equal.</li>
</ol>
<p><strong>States of Matter & Solutions</strong></p>
<ol>
  <li>The three common states of matter are solid, liquid, and gas.</li>
  <li>Plasma is often considered the fourth state of matter.</li>
  <li>Melting is the transition from a solid to a liquid.</li>
  <li>Boiling is the transition from a liquid to a gas.</li>
  <li>Sublimation is the transition from a solid to a gas.</li>
  <li>A solution is a homogeneous mixture of two or more substances.</li>
  <li>The solute is the substance being dissolved, and the solvent is the substance doing the dissolving.</li>
  <li>Solubility is the ability of a substance to dissolve in a solvent.</li>
  <li>Concentration is the amount of solute dissolved in a given amount of solvent.</li>
  <li>Molarity (M) is a common unit of concentration, defined as moles of solute per liter of solution.</li>
</ol>
<p><strong>Organic Chemistry & Biochemistry</strong></p>
<ol>
  <li>Organic chemistry is the study of carbon-containing compounds.</li>
  <li>Hydrocarbons are organic compounds containing only carbon and hydrogen.</li>
  <li>Functional groups are specific groups of atoms within molecules that determine their reactivity.</li>
  <li>Proteins are large molecules composed of amino acids.</li>
  <li>Carbohydrates are sugars and starches that provide energy.</li>
  <li>Lipids are fats and oils that are essential for cell structure and function.</li>
  <li>DNA (deoxyribonucleic acid) carries genetic information.</li>
  <li>Enzymes are proteins that act as biological catalysts.</li>
  <li>Photosynthesis is the process by which plants convert light energy into chemical energy.</li>
  <li>Respiration is the process by which organisms break down glucose to release energy.</li>
</ol>
<p><strong>Chemical Kinetics & Thermodynamics</strong></p>
<ol>
  <li>The rate constant (k) is a proportionality constant in chemical kinetics.</li>
  <li>The Arrhenius equation describes the temperature dependence of reaction rates.</li>
  <li>Catalysts lower the activation energy of a reaction.</li>
  <li>The Gibbs free energy (G) determines the spontaneity of a reaction.</li>
  <li>A negative ΔG indicates a spontaneous reaction under standard conditions.</li>
  <li>Enthalpy (H) is a measure of the heat content of a system.</li>
  <li>Entropy (S) is a measure of the disorder or randomness of a system.</li>
  <li>Hess's Law states that the enthalpy change of a reaction is independent of the path taken.</li>
  <li>The equilibrium constant (K) relates the concentrations of reactants and products at equilibrium.</li>
  <li>Le Chatelier's Principle states that a system at equilibrium will shift to relieve stress.</li>
</ol>
<p><strong>Acids, Bases, and pH</strong></p>
<ol>
  <li>Strong acids completely dissociate in water.</li>
  <li>Strong bases completely dissociate in water.</li>
  <li>Weak acids and bases only partially dissociate in water.</li>
  <li>The pH of pure water is 7 at 25°C.</li>
  <li>The pH scale is logarithmic, so a pH change of 1 represents a 10-fold change in acidity/basicity.</li>
  <li>Buffers are solutions that resist changes in pH.</li>
  <li>Titration is a technique used to determine the concentration of a solution.</li>
  <li>The equivalence point in a titration is the point where the acid and base have completely reacted.</li>
  <li>Indicators are substances that change color at a specific pH.</li>
  <li>pKa is the negative logarithm of the acid dissociation constant Ka, and it measures acid strength.</li>
</ol>
<p><strong>Electrochemistry</strong></p>
<ol>
  <li>Electrochemistry studies the relationship between chemical reactions and electricity.</li>
  <li>Oxidation occurs at the anode.</li>
  <li>Reduction occurs at the cathode.</li>
  <li>An electrochemical cell converts chemical energy into electrical energy (or vice versa).</li>
  <li>Electrolysis is the process of using electrical energy to drive a non-spontaneous reaction.</li>
  <li>A battery is a device that stores chemical energy and converts it into electrical energy.</li>
  <li>The standard reduction potential measures the tendency of a species to gain electrons.</li>
  <li>The Nernst equation relates the cell potential to the concentrations of reactants and products.</li>
  <li>Corrosion is the degradation of metals by electrochemical processes.</li>
  <li>Faraday's laws of electrolysis relate the amount of substance produced to the electrical charge passed.</li>
</ol>
<p><strong>Analytical Chemistry</strong></p>
<ol>
  <li>Chromatography is a technique used to separate mixtures of substances.</li>
  <li>Spectrophotometry measures the absorption or transmission of light through a solution.</li>
  <li>Mass spectrometry is used to determine the mass-to-charge ratio of ions.</li>
  <li>Nuclear Magnetic Resonance (NMR) spectroscopy is used to determine the structure of molecules.</li>
  <li>Gas chromatography (GC) separates volatile compounds.</li>
  <li>High-performance liquid chromatography (HPLC) separates non-volatile compounds.</li>
  <li>Atomic absorption spectroscopy (AAS) measures the absorption of light by free atoms.</li>
  <li>Titration is an analytical technique used to determine the concentration of a substance.</li>
  <li>Gravimetric analysis involves measuring the mass of a substance to determine its amount.</li>
   <li>Electrophoresis separates molecules based on their size and charge.</li>
</ol>
<p><strong>Inorganic Chemistry</strong></p>
<ol>
  <li>Transition metals have variable oxidation states and can form colored compounds.</li>
  <li>Coordination compounds are formed by a central metal ion and surrounding ligands.</li>
  <li>The lanthanides and actinides are f-block elements.</li>
  <li>Alkali metals are highly reactive and form +1 ions.</li>
  <li>Alkaline earth metals are reactive and form +2 ions.</li>
  <li>Halogens are highly reactive and form -1 ions.</li>
  <li>Noble gases are generally unreactive and have full valence shells.</li>
  <li>Minerals are naturally occurring inorganic compounds.</li>
  <li>Ceramics are inorganic, non-metallic materials.</li>
  <li>Metallurgy is the science of extracting metals from their ores.</li>
</ol>
<p><strong>Nuclear Chemistry</strong></p>
<ol>
 <li>Radioactivity is the spontaneous emission of particles or energy from an unstable nucleus.</li>
  <li>Alpha particles are helium nuclei (2 protons and 2 neutrons).</li>
  <li>Beta particles are high-energy electrons or positrons.</li>
  <li>Gamma rays are high-energy electromagnetic radiation.</li>
  <li>Nuclear fission is the splitting of a heavy nucleus into smaller nuclei.</li>
  <li>Nuclear fusion is the combining of light nuclei to form heavier nuclei.</li>
  <li>Half-life is the time it takes for half of a radioactive substance to decay.</li>
  <li>Radiocarbon dating is used to determine the age of organic materials.</li>
  <li>Nuclear reactors use controlled fission reactions to generate electricity.</li>
  <li>Nuclear medicine uses radioactive isotopes for diagnosis and treatment.</li>
</ol>
<p><strong>Organic Chemistry (More Specifics)</strong></p>
<ol>
    <li>Alkanes are saturated hydrocarbons with single bonds.</li>
    <li>Alkenes are hydrocarbons with at least one carbon-carbon double bond.</li>
    <li>Alkynes are hydrocarbons with at least one carbon-carbon triple bond.</li>
    <li>Alcohols contain a hydroxyl (-OH) functional group.</li>
    <li>Ethers contain an oxygen atom bonded to two carbon atoms.</li>
    <li>Aldehydes contain a carbonyl (C=O) group at the end of the carbon chain.</li>
    <li>Ketones contain a carbonyl group within the carbon chain.</li>
    <li>Carboxylic acids contain a carboxyl (-COOH) group.</li>
    <li>Amines contain a nitrogen atom bonded to one or more carbon atoms.</li>
    <li>Amides contain a carbonyl group bonded to a nitrogen atom.</li>
</ol>
<p><strong>Biochemistry (More Specifics)</strong></p>
<ol>
    <li>Amino acids are the building blocks of proteins.</li>
    <li>Peptide bonds link amino acids together.</li>
    <li>The primary structure of a protein is its amino acid sequence.</li>
    <li>The secondary structure includes alpha helices and beta sheets.</li>
    <li>The tertiary structure is the overall 3D shape of a protein.</li>
   <li>The quaternary structure describes how multiple protein subunits interact.</li>
    <li>Enzymes have an active site where substrates bind.</li>
    <li>Carbohydrates include monosaccharides, disaccharides, and polysaccharides.</li>
    <li>Lipids include triglycerides, phospholipids, and steroids.</li>
    <li>Vitamins and minerals are essential micronutrients.</li>
</ol>
<p><strong>Materials Chemistry</strong></p>
<ol>
    <li>Polymers are large molecules made of repeating subunits.</li>
    <li>Thermoplastics can be melted and reshaped repeatedly.</li>
    <li>Thermosets cannot be melted and reshaped after they are formed.</li>
    <li>Elastomers are polymers that exhibit elasticity (like rubber).</li>
    <li>Composites are materials made from two or more different materials.</li>
   <li>Nanomaterials have dimensions on the nanometer scale (10^-9 meters).</li>
    <li>Crystals have an ordered arrangement of atoms, ions, or molecules.</li>
    <li>Amorphous solids lack a long-range order in their structure.</li>
    <li>Semiconductors have conductivity between that of a conductor and an insulator.</li>
    <li>Superconductors exhibit zero electrical resistance below a critical temperature.</li>
</ol>
<p><strong>Environmental Chemistry</strong></p>
<ol>
    <li>Air pollution is caused by the release of harmful substances into the atmosphere.</li>
    <li>Water pollution is the contamination of water bodies with harmful substances.</li>
    <li>The greenhouse effect traps heat in the Earth's atmosphere.</li>
    <li>Acid rain is caused by the release of sulfur dioxide and nitrogen oxides.</li>
    <li>Ozone depletion is caused by the release of chlorofluorocarbons (CFCs).</li>
    <li>The carbon cycle is the movement of carbon between the atmosphere, oceans, and biosphere.</li>
    <li>Sustainable chemistry seeks to minimize the use of hazardous substances and processes.</li>
    <li>Biodegradable materials can be broken down by microorganisms.</li>
    <li>The precautionary principle is the idea that if an action has a suspected risk of causing harm, that burden of proof that it is not harmful falls on those taking the action.</li>
   <li>Many chemical pollutants can accumulate in the food chain, increasing in concentration at higher trophic levels (biomagnification).</li>
</ol>
</div>

        </>
      ),
      subTopics: [
        { name: 'Atomic Structure', id: 'atomic-structure' },
        { name: 'Chemical Bonding', id: 'chemical-bonding' },
        { name: 'The Periodic Table', id: 'the-periodic-table' },
        { name: 'Organic Chemistry', id: 'organic' },
        { name: 'Reaction Kinetics', id: 'reaction-kinetics' },
        { name: 'Acid-Base Chemistry', id: 'acid-base-chemistry' },
        { name: 'Analytical Chemistry', id: 'analytical-chemistry' },
        { name: 'Isomers and Nomenclature', id: 'isomers-and-nomenclature' },
        { name: 'Biochemistry', id: 'biochemistry' },
      ],
      articles: [
        {
          title: 'Atomic Structure — Notes',
          content: (
            <>
              
            </>
          ),
          tableOfContents: [
            { title: 'Introduction to Atomic Structure', id: 'intro-atomic-structure' },
            { title: 'Sub section in atomic structure', id: 'sub-section-atomic' }
          ]
        },
        { title: 'Basic Principles of Chemical Bonding', content: (<p>This is the content of basic principles of chemical bonding, with id: basic-chemical-bonding.</p>), tableOfContents: [{ title: 'Basic Principles of Chemical Bonding', id: 'basic-chemical-bonding' }] },
        { title: 'Understanding the Periodic Table', content: (<p>This is the content of understanding the periodic table, with id: periodic-table.</p>), tableOfContents: [{ title: 'Understanding the Periodic Table', id: 'periodic-table' }] },
        { title: 'Introduction to Organic Chemistry', content: (<p>This is the content of introduction to organic chemistry, with id: intro-organic-chemistry.</p>), tableOfContents: [{ title: 'Introduction to Organic Chemistry', id: 'intro-organic-chemistry' }] },
        { title: 'Reaction Kinetics Explained', content: (<p>This is the content of reaction kinetics explained, with id: reaction-kinetics-explained.</p>), tableOfContents: [{ title: 'Reaction Kinetics Explained', id: 'reaction-kinetics-explained' }] },
        { title: 'Acid-Base Chemistry', content: (<p>This is the content of acid-base chemistry, with id: acid-base-chemistry.</p>), tableOfContents: [{ title: 'Acid-Base Chemistry', id: 'acid-base-chemistry' }] },
      ],
      mainTopics: [
        {
          name: 'Organic Chemistry', description: 'Study of carbon-containing compounds.', icon: 'Orga',
          subTopics: [
            { name: 'Alkanes', id: 'alkanes' },
            { name: 'Alkenes', id: 'alkenes' },
            { name: 'Alkynes', id: 'alkynes' }
          ]
        },
        { name: 'Inorganic Chemistry', description: 'Explore non-carbon based substances.', icon: 'Inorg' },
        { name: 'Physical Chemistry', description: 'Study of the underlying physical principles in chemical systems.', icon: 'Physi' },
        { name: 'Analytical Chemistry', description: 'Study of chemical properties for identifying and quantifying chemical substances.', icon: 'Analy' },
      ],
    },
    {
      name: 'Biology',
      icon: 'icons/biology.png',
      link: '/biology',
      description: 'Uncover the intricacies of life sciences.',
      subTopics: [
        { name: 'Cell Biology', id: 'cell-biology' },
        { name: 'Genetics', id: 'genetics' },
        { name: 'Ecology', id: 'ecology' },
      ],
      articles: [
        { title: 'Introduction to Cell Biology', content: (<p>This is the content of introduction to cell biology, with id: intro-cell-biology.</p>), tableOfContents: [{ title: 'Introduction to Cell Biology', id: 'intro-cell-biology' }] },
        { title: 'Principles of Genetics', content: (<p>This is the content of principles of genetics, with id: genetics-principles.</p>), tableOfContents: [{ title: 'Principles of Genetics', id: 'genetics-principles' }] },
        { title: 'Overview of Ecology', content: (<p>This is the content of overview of ecology, with id: overview-ecology.</p>), tableOfContents: [{ title: 'Overview of Ecology', id: 'overview-ecology' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'Computer Science',
      icon: 'icons/programming.png',
      link: '/computer-science',
      description: 'Develop coding and logical thinking skills.',
      subTopics: [
        { name: 'Data Structures', id: 'data-structures' },
        { name: 'Algorithms', id: 'algorithms' },
        { name: 'Programming Languages', id: 'programming-languages' },
      ],
      articles: [
        { title: 'Introduction to Data Structures', content: (<p>This is the content of introduction to data structures, with id: intro-data-structures.</p>), tableOfContents: [{ title: 'Introduction to Data Structures', id: 'intro-data-structures' }] },
        { title: 'Basics of Algorithms', content: (<p>This is the content of basics of algorithms, with id: basics-algorithms.</p>), tableOfContents: [{ title: 'Basics of Algorithms', id: 'basics-algorithms' }] },
        { title: 'Overview of Programming Languages', content: (<p>This is the content of overview of programming languages, with id: programming-overview.</p>), tableOfContents: [{ title: 'Overview of Programming Languages', id: 'programming-overview' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'History',
      icon: 'icons/history.png',
      link: '/history',
      description: 'Explore past civilizations and events.',
      subTopics: [
        { name: 'Ancient History', id: 'ancient-history' },
        { name: 'Medieval History', id: 'medieval-history' },
        { name: 'Modern History', id: 'modern-history' },
      ],
      articles: [
        { title: 'Introduction to Ancient History', content: (<p>This is the content of introduction to ancient history, with id: intro-ancient-history.</p>), tableOfContents: [{ title: 'Introduction to Ancient History', id: 'intro-ancient-history' }] },
        { title: 'Overview of Medieval History', content: (<p>This is the content of overview of medieval history, with id: overview-medieval-history.</p>), tableOfContents: [{ title: 'Overview of Medieval History', id: 'overview-medieval-history' }] },
        { title: 'Modern History Overview', content: (<p>This is the content of modern history overview, with id: overview-modern-history.</p>), tableOfContents: [{ title: 'Modern History Overview', id: 'overview-modern-history' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'English Literature',
      icon: 'icons/english.png',
      link: '/english-literature',
      description: 'Appreciate classic and contemporary literature.',
      subTopics: [
        { name: 'Shakespearean Literature', id: 'shakespearean-literature' },
        { name: 'Modern Literature', id: 'modern-literature' },
        { name: 'Poetry', id: 'poetry' },
      ],
      articles: [
        { title: 'Introduction to Shakespearean Literature', content: (<p>This is the content of introduction to shakespearean literature, with id: intro-shakespeare.</p>), tableOfContents: [{ title: 'Introduction to Shakespearean Literature', id: 'intro-shakespeare' }] },
        { title: 'Overview of Modern Literature', content: (<p>This is the content of overview of modern literature, with id: overview-modern-lit.</p>), tableOfContents: [{ title: 'Overview of Modern Literature', id: 'overview-modern-lit' }] },
        { title: 'Introduction to Poetry', content: (<p>This is the content of introduction to poetry, with id: intro-poetry.</p>), tableOfContents: [{ title: 'Introduction to Poetry', id: 'intro-poetry' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'Economics',
      icon: 'icons/economics.png',
      link: '/economics',
      description: 'Understand the systems of production, distribution, and consumption.',
      subTopics: [
        { name: 'Microeconomics', id: 'microeconomics' },
        { name: 'Macroeconomics', id: 'macroeconomics' },
        { name: 'International Economics', id: 'international-economics' },
      ],
      articles: [
        { title: 'Introduction to Microeconomics', content: (<p>This is the content of introduction to microeconomics, with id: intro-microeconomics.</p>), tableOfContents: [{ title: 'Introduction to Microeconomics', id: 'intro-microeconomics' }] },
        { title: 'Overview of Macroeconomics', content: (<p>This is the content of overview of macroeconomics, with id: overview-macroeconomics.</p>), tableOfContents: [{ title: 'Overview of Macroeconomics', id: 'overview-macroeconomics' }] },
        { title: 'Introduction to International Economics', content: (<p>This is the content of introduction to international economics, with id: intro-international-economics.</p>), tableOfContents: [{ title: 'Introduction to International Economics', id: 'intro-international-economics' }] },
      ],
      mainTopics: [

      ],
    },
    {
      name: 'Geography',
      icon: 'icons/geography.png',
      link: '/geography',
      description: 'Explore the earth and its different ecosystems and human societies.',
      subTopics: [
        { name: 'Physical Geography', id: 'physical-geography' },
        { name: 'Human Geography', id: 'human-geography' },
        { name: 'Environmental Geography', id: 'environmental-geography' },
      ],
      articles: [
        { title: 'Introduction to Physical Geography', content: (<p>This is the content of introduction to physical geography, with id: intro-physical-geography.</p>), tableOfContents: [{ title: 'Introduction to Physical Geography', id: 'intro-physical-geography' }] },
        { title: 'Overview of Human Geography', content: (<p>This is the content of overview of human geography, with id: overview-human-geography.</p>), tableOfContents: [{ title: 'Overview of Human Geography', id: 'overview-human-geography' }] },
        { title: 'Overview of Environmental Geography', content: (<p>This is the content of overview of environmental geography, with id: overview-environmental-geography.</p>), tableOfContents: [{ title: 'Overview of Environmental Geography', id: 'overview-environmental-geography' }] },
      ],
      mainTopics: [

      ],
    },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:subjectName" element={<SubjectPage subjects={subjects} />} />
        <Route path="/:subjectName/:topicName" element={<SubTopicPage subjects={subjects} />} />
        <Route path="/:subjectName/articles/:articleName/" element={<ArticlePage subjects={subjects} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;