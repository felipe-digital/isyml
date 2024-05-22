@extends('Layouts.template')

@section('seo')
    <title>Rachel | Cosmetologa licenciada en Tampa | ISYML</title>
    <meta property="og:title" content="Rachel | Cosmetologa licenciada en Tampa | ISYML">
    <meta property="og:type" content="website">
    <meta property="og:description" content="Hola, soy Rachel, cosmetóloga licenciada en Tampa. Contáctame y date un tiempo para ser consentida y sentirte hermosa.">
    <meta property="og:url" content="https://isyml.site/rachelp">
    <meta property="og:image" content="https://isyml.site/og/rachelp.png">
    <link rel="icon" href="{{ asset('favicon/rachelp.png') }}" type="image/x-icon">
    <meta name="description" content="Hola, soy Rachel, cosmetóloga licenciada en Tampa. Contáctame y date un tiempo para ser consentida y sentirte hermosa.">
    <meta name="keywords" content="cosmetologa, cosmetologia, cosmetologa en tampa, cosmetologa cerca de tampa, cuidado de la piel en tampa, cosmetologist near tampa, cosmetologist in tampa">
@endsection

@section('content')
    <div id="rachel-p" data-url="{{ url('/') }}"></div>
@endsection
