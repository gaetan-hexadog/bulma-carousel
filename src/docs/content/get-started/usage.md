---
title: "Usage"
date: "2020-03-21"
menu:
    main:
        parent: 'get-started'
        weight: 2
weight: 2
draft: false
---

# Basic usage
{{< preview id="carousel" lang="html" >}}<div id="carouselExampleSlidesOnly" class="carousel" data-ride="carousel">
	<div class="carousel-container">
		<div class="carousel-item is-active has-background-dark">
			<figure class="image is-covered">
				<img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt="First slide">
			</figure>
			<div class="carousel-caption">
				<h5>First slide</h5>
				<p>First slide content</p>
			</div>
		</div>
		<div class="carousel-item has-background-dark">
			<figure class="image is-covered">
				<img src="..." alt="Second slide">
			</figure>
			<div class="carousel-caption">
				<h5>...</h5>
				<p>...</p>
			</div>
		</div>
		<div class="carousel-item has-background-dark">
			
			<div class="carousel-caption">
				<h5>...</h5>
				<p>...</p>
			</div>
		</div>
    </div>
	<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="previous">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
	<ol class="carousel-indicators">
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="0" class="is-active"></li>
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
</div>{{< /preview >}}

{{< preview id="carousel-vertical" lang="html" >}}<div class="carousel is-vertical" data-ride="carousel">
	<div class="carousel-container">
		<div class="carousel-item is-active has-background-dark">
			<figure class="image is-covered">
				<img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt="First slide">
			</figure>
			<div class="carousel-caption">
				<h5>First slide</h5>
				<p>First slide content</p>
			</div>
		</div>
		<div class="carousel-item has-background-dark">
			<figure class="image is-covered">
				<img src="..." alt="Second slide">
			</figure>
			<div class="carousel-caption">
				<h5>...</h5>
				<p>...</p>
			</div>
		</div>
		<div class="carousel-item has-background-dark">
			
			<div class="carousel-caption">
				<h5>...</h5>
				<p>...</p>
			</div>
		</div>
    </div>
	<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="previous">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
	<ol class="carousel-indicators">
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="0" class="is-active"></li>
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		<li class="carousel-indicator" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
</div>{{< /preview >}}
