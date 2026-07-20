# Cantilever Bracket: Analytical vs. FEA Validation

## Purpose

Validate a simple 6061 aluminum cantilever bracket in Autodesk Fusion Static Stress and compare the solver results with closed-form Euler-Bernoulli beam calculations. This is a standalone design-analysis study, not a claim about a previously fabricated part.

## Validated model

- Material: Aluminum 6061 from the Fusion material library
- Geometry: rectangular cantilever, 6.695 in span, 1.157 in height, 0.250 in thickness
- Load case: fixed mounting face with a 100 lbf downward load on the free-end face
- Solver: Autodesk Fusion Static Stress, default mesh, zero cloud-credit solve

## Verified Fusion results

- Maximum von Mises stress: 80.134 MPa
- Maximum total displacement: 0.796 mm
- Minimum factor of safety: 3.432

The high stress occurs at the fixed end, and the maximum displacement occurs at the loaded free end, which matches the expected cantilever response.

## Analytical comparison

Using P = 100 lbf, L = 6.695 in, h = 1.157 in, b = 0.250 in, and E = 68.9 GPa:

- Area moment of inertia: I = b*h^3/12 = 1.343e-8 m^4
- Bending stress: sigma = P*L*(h/2)/I = 82.759 MPa
- Tip displacement: delta = P*L^3/(3*E*I) = 0.788 mm

| Metric | Analytical | Fusion FEA | Difference |
| --- | ---: | ---: | ---: |
| Maximum von Mises stress | 82.759 MPa | 80.134 MPa | 3.17% |
| Maximum tip displacement | 0.788 mm | 0.796 mm | 1.02% |

## Evidence captured

1. Fusion static-stress model with fixed left end and 100 lbf downward free-end load
2. Safety-factor result, minimum 3.432
3. Von Mises stress result, maximum 80.134 MPa
4. Total displacement result, maximum 0.796 mm
5. Euler-Bernoulli comparison using measured geometry, with 3.17% stress and 1.02% displacement differences

## Resume rule

The model is solved and the comparison is documented. A resume bullet may now describe this study truthfully.
