# AI document-parsing research

## Google Gemini document understanding
Source: https://ai.google.dev/gemini-api/docs/document-processing

Google’s documentation says Gemini models can process PDF documents using native vision to understand the entire document context, not only plain text. The documentation describes analysing text, images, diagrams, charts, and tables in long documents, extracting information into structured output formats, and summarising or answering questions across visual and textual document elements. It also explains passing PDFs inline for smaller or temporary processing and using the Files API for larger documents or repeated references. Non-PDF documents can be passed as text, but visual context such as charts or diagrams may be lost.

Recruit Raptor implication: Gemini is a strong first provider for an MVP CV parser because it can process PDF layout and visual elements and return structured candidate data. The application should still validate the output against a fixed schema and show a human review screen.

## Mistral OCR 4
Source: https://mistral.ai/news/ocr-4/

Mistral’s June 23, 2026 announcement describes OCR 4 as adding bounding boxes, block classification, and inline confidence scores. It states support for 170 languages, a single-container self-hosting option, API and Document AI availability, and use as an ingestion component for search, RAG, and agent workflows.

Recruit Raptor implication: Mistral OCR 4 is valuable as a specialist document-ingestion adapter when the product needs page-level evidence, layout-aware extraction, bounding boxes, confidence scores, multilingual support, or future self-hosting. It may be better used as a preprocessing/OCR layer followed by an LLM schema-extraction layer, rather than as the only parser.

## Recommended parsing pipeline

1. Preserve the original uploaded file and metadata.
2. Detect file type, page count, and whether text extraction is available.
3. For digital PDFs, attempt native document input first.
4. For scans or difficult layouts, use an OCR/layout adapter such as Mistral OCR 4 or another specialist document service.
5. Send normalized text plus layout evidence to the selected extraction model.
6. Return strict structured JSON matching the Recruit Raptor candidate schema.
7. Attach field-level confidence, page/section evidence where available, and an uncertainty flag.
8. Present a recruiter review screen before saving candidate information.
9. Store the original file, extracted draft, review changes, and parser/provider metadata separately.
10. Provide a clear fallback when a provider fails, cannot parse the format, or returns invalid structured data.

## Microsoft Azure Document Intelligence
Source: https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/model-overview?view=doc-intel-4.0.0

Microsoft’s current model overview lists Read and Layout document analysis models, prebuilt models, custom classifier and custom extraction options, and add-on capabilities including high-resolution OCR, formulas, style/font, barcodes, languages, key-value pairs, query fields, and searchable PDFs. The service is a specialist document-intelligence layer rather than a general conversation model.

Recruit Raptor implication: Azure Document Intelligence is a strong enterprise adapter for agencies that later require more formal OCR/layout processing, regional deployment, or custom document models. It is probably too heavy for the first one- or two-tester UI MVP, but the provider interface should leave room for it.

## Unstructured structured data extraction
Source: https://docs.unstructured.io/concepts/structured-data-extractor/data-extractor

Unstructured describes partitioning documents into elements such as titles, narrative text, tables, images, and lists, then defining a target structure so values are extracted into consistent JSON. Its documented output can preserve both extracted fields and the original document elements/metadata, or return only the extracted data.

Recruit Raptor implication: An Unstructured-style adapter is useful when preserving document evidence, layout elements, and named fields is important. The open-source library does not provide the same structured-data extractor capability as the hosted product according to the documentation notice, so licensing and deployment should be checked before selecting it for a commercial product.

## Updated recommendation

For the first working parser, use provider-native PDF handling from Gemini or another selected multimodal model, strict JSON Schema output, and a review screen. Add a specialist OCR/layout adapter interface now, with Mistral OCR 4 as the most compelling current candidate because of bounding boxes and confidence scores. Keep Azure Document Intelligence and Unstructured as optional enterprise adapters rather than adding them to the initial UI MVP.
